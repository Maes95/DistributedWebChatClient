import { Component, OnInit } from '@angular/core';
import { Result, Message } from '../../models/result';
import { VertEventBus } from '../../services/EventBus';
import { ExportService } from '../../services/export.service';
import { ResultsService } from '../../services/fakeResults.service';
import { UtilsService } from '../../services/utils.service';

declare var $:any;

@Component({
    selector: 'test-dashboard',
    templateUrl: '../app/components/test-dashboard/test-dashboard.component.html',
    providers: [VertEventBus,ExportService, ResultsService, UtilsService],
    styleUrls: ['./app/components/test-dashboard/test-dashboard.component.css']
})
export class TestDashboardComponent implements OnInit{

  // VARS


  public app: any;
  public messages: any[] = [];
  public results:Result[] = [];

  public loadingCheckNodes:boolean = false;
  public allNodesValid:boolean = false;
  public doingTest:boolean = false;

  constructor(private _eventBus: VertEventBus, private _export: ExportService, private _fake: ResultsService, private _utils:UtilsService){}

  ngOnInit(){

    this.tab = 0;
    this.app = {
      name: "RabbitMQ",
      address: "127.0.0.1",
      port: 5000,
      pem: "TFG.pem",
      isDistributed: false,
      nodes: [
        { url: "ec2-34-244-127-84.eu-west-1.compute.amazonaws.com:9000", status: ""},
        { url: "ec2-34-243-28-134.eu-west-1.compute.amazonaws.com:9000", status: ""},
      ],
      cases: [
            { numChats: 1, numUsers: 10 },
            { numChats: 1, numUsers: 20 },
            { numChats: 1, numUsers: 30 },
            { numChats: 1, numUsers: 40 },
            { numChats: 1, numUsers: 50 },
            { numChats: 2, numUsers: 20 },
            { numChats: 2, numUsers: 25 },
            { numChats: 2, numUsers: 30 },
            { numChats: 4, numUsers: 10 },
            { numChats: 4, numUsers: 12 },
            { numChats: 4, numUsers: 15 },
      ]
    }

  }

  public addNode(){
    this.app.nodes.push({ url: "", status: ""});
  }

  public removeNode(index:number){
    this.app.nodes.splice(index,1);
  }

  public checkNodes(){
    this.loadingCheckNodes = true;
    this.allNodesValid = false;
    let count = 0;
    let successCount = 0;
    let filledNodes = this.app.nodes.filter( (node:any)=> node.url.length > 0 )
    if(filledNodes.length == 0){
      this.loadingCheckNodes = false;
      return;
    }

    for(let node of filledNodes){
      this.loadingCheckNodes = false;

      this._utils.checkNodeExist(node.url, () => {
        // EXIST/ SUCCESS
        count++;
        successCount++;
        node.status = 'success';
        if(count == filledNodes.length) this.loadingCheckNodes = false;
        if(successCount == filledNodes.length) this.allNodesValid = true;
      }, () => {
        // NO EXIST / ERROR
        count++;
        node.status = 'error';
        this.displayMessage('error', 'user',"Node "+node.url+" does not respond")
      });

    }
  }

  public displayMessage(type:string, icon:string, text:string){
    this.messages.push({ type, icon, text })
  }

  public closeMessage(index:number){
    this.messages.splice(index, 1);
  }

  public removeCase(index:number){
    this.app.cases.splice(index, 1);
  }

  public addCase(){
    this.app.cases.push({});
  }

  public addCaseEnter(event: KeyboardEvent){
    if(event.keyCode == 13) this.addCase();
  }

  public validForm(){
    let validApp = this.app.name && this.app.address && this.app.port;
    let validDistributed = !this.app.isDistributed || (this.allNodesValid)
    return validApp && validDistributed;
  }

  public progress:any = {};

  public launchCase(){
    this.doingTest = true;
    this.app.nodes = this.app.nodes.filter( (node:any)=> node.url.length > 0 ).map((node:any) => "ubuntu@"+node.url.split(':')[0] );
    this.app.cases = this.app.cases.filter( (_case:any)=> _case.numChats && _case.numUsers );
    this._eventBus.send("new.test", this.app);

    this.progress = {
      numInteration : 0,
      index : 0,
      label : this.app.cases[0].numChats + " chats / "+ this.app.cases[0].numUsers +" users per chat"
    }

    this._eventBus.addHandler("new.result", (err:any, message:Message<Result>) => {
        this.addResult(message.body);
        this.progress.numInteration = 0;
        this.progress.index++;
        if(this.progress.index < this.app.cases.length)
          this.progress.label = this.app.cases[this.progress.index].numChats + " chats / "+ this.app.cases[this.progress.index].numUsers +" users per chat";
    }, []);

    this._eventBus.addHandler("new.interation", (err:any, message:Message<any>) => {
        this.progress.numInteration+=10;
    }, []);

    this._eventBus.addHandler("finish", (err:any, message:Message<any>) => {
        this.progress.numInteration=100;
        this.progress.label="All test completed";
        this._export.toJSON( this.results, this.app.name );
    }, []);
  }

  // VIEW

  time_graphics = {
    data: {}
  };
  cpu_graphics = {
    data: {}
  };
  ram_graphics = {
    data: {}
  };

  node_index = {};


  private addResult(result:Result){
    console.log(result);
    this.results.push(result);
    let numChatsKey = 'numChats-'+result.numChats;

    if(this.time_graphics.data[numChatsKey] == undefined){
      this.time_graphics.data[numChatsKey] = {
        name: result.numChats+" room(s) - Time",
        times: [{
          "name": result.app + " - "+result.numChats+" room(s) - Time",
          "series": []
        }]
      }
    }

    if(this.cpu_graphics.data[numChatsKey] == undefined){
      this.cpu_graphics.data[numChatsKey] = {
        name: result.numChats+" room(s) - CPU use",
        nodes: []
      }
    }

    if(this.ram_graphics.data[numChatsKey] == undefined){
      this.ram_graphics.data[numChatsKey] = {
        name: result.numChats+" room(s) - RAM use",
        nodes: []
      }
    }

    for(let node of result.nodesMetrics){

      if(!this.node_index[numChatsKey]) this.node_index[numChatsKey] = {};

      if(this.node_index[numChatsKey][node.id] == undefined){
        // CPU
        this.cpu_graphics.data[numChatsKey].nodes.push({
          "name": node.id,
          "series": []
        })
        // RAM
        this.ram_graphics.data[numChatsKey].nodes.push({
          "name": node.id,
          "series": []
        })
        this.node_index[numChatsKey][node.id] = this.cpu_graphics.data[numChatsKey].nodes.length - 1;
      }

      let node_index = this.node_index[numChatsKey][node.id];

      if(result.isDistributed){
        // CPU
        this.cpu_graphics.data[numChatsKey].nodes[node_index].series.push({
          "name": result.numUsers.toString(),
          "value": node.cpuUse.reduceRight( (a,b) => a + b , 0) / node.cpuUse.length
        });

        // RAM
        this.ram_graphics.data[numChatsKey].nodes[node_index].series.push({
          "name": result.numUsers.toString(),
          "value": node.ram.reduceRight( (a,b) => a + b , 0) / node.ram.length
        });
      }

    }


    this.time_graphics.data[numChatsKey].times[0].series.push({
      "name": result.numUsers.toString(),
      "value": result.avgTime
    });

    // FORCE UPDATE
    this.ram_graphics.data[numChatsKey].nodes = [...this.ram_graphics.data[numChatsKey].nodes];
    this.cpu_graphics.data[numChatsKey].nodes = [...this.cpu_graphics.data[numChatsKey].nodes];
    this.time_graphics.data[numChatsKey].times = [...this.time_graphics.data[numChatsKey].times];
  }

  public tabf(index:number){
    let keys = this.keys(this.time_graphics.data);
    // FORCE UPDATE
    for (let key of keys) {
      this.time_graphics.data[key].times = [...this.time_graphics.data[key].times];
      this.ram_graphics.data[key].nodes = [...this.ram_graphics.data[key].nodes];
      this.cpu_graphics.data[key].nodes = [...this.cpu_graphics.data[key].nodes];
    }
    this.tab=index;
  }

  tab:number;

  timesConfig = {
    // Chart Options
    showXAxis: true,
    showYAxis : true,
    gradient : true,
    showLegend : false,
    showXAxisLabel : true,
    xAxisLabel : 'Nº of users per chat',
    showYAxisLabel : true,
    yAxisLabel : 'Time (in milliseconds)'
  }

  cpuConfig = {
    // Chart Options
    showXAxis: true,
    showYAxis : true,
    gradient : true,
    showLegend : true,
    showXAxisLabel : true,
    xAxisLabel : 'Nº of users per chat',
    showYAxisLabel : true,
    yAxisLabel : '% CPU used'
  }

  ramConfig = {
    // Chart Options
    showXAxis: true,
    showYAxis : true,
    gradient : true,
    showLegend : true,
    showXAxisLabel : true,
    xAxisLabel : 'Nº of users per chat',
    showYAxisLabel : true,
    yAxisLabel : 'RAM used'
  }

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  timeColor = {
    domain: ['#B901FC']
  };

  public keys(object: Object){
    return Object.keys(object);
  }

  private find(array: Object[], key:string, value:any){
    for (let i = 0; i < array.length; i++) {
        if(array[i][key]==value){
          return i;
        };
    }
  }

}
