import { Component, AfterViewInit} from '@angular/core';
import { Result, Message } from '../../models/result';
import { ExportService } from '../../services/export.service';
import { FakeResultsService } from '../../services/fakeResults.service';
import { UtilsService } from '../../services/utils.service';
import { BaseChartDirective } from 'ng2-charts';

declare var $:any;

@Component({
    selector: 'comparartive-dashboard',
    templateUrl: '../app/components/comparative-dashboard/comparative-dashboard.component.html',
    providers: [ExportService, FakeResultsService, UtilsService],
    styleUrls: ['./app/components/comparative-dashboard/comparative-dashboard.component.css']
})
export class ComparativeDashboardComponent implements AfterViewInit{

  // VARS

  public app: any;
  public messages: any[] = [];
  public results:Result[] = [];

  public loadingCheckNodes:boolean = false;
  public allNodesValid:boolean = false;
  public doingTest:boolean = false;

  constructor(private _export: ExportService, private _fake: FakeResultsService, private _utils:UtilsService){}

  ngAfterViewInit(){
    this._fake.generateResults((result:Result)=> this.addResult(result));
    setTimeout(()=>{
      this.tabf(0);
    },10)
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

  apps:string[] = [];
  app_index = {};
  chats_index = {};
  selectedApp:string;


  private addResult(result:Result){
    this.results.push(result);

    let numChatsKey = 'numChats-'+result.numChats;
    if(!this.chats_index[numChatsKey]) this.chats_index[numChatsKey] = result.numChats;
    if(this.apps.indexOf(result.app) == -1) this.apps.push(result.app);
    if(!this.selectedApp) this.selectedApp = result.app;
    if(!this.globalNumChatsKey) this.globalNumChatsKey = numChatsKey;

    // TIME GRAPHICS

    if(this.time_graphics.data[numChatsKey] == undefined){
      this.time_graphics.data[numChatsKey] = {
        name: result.numChats+" room(s) - Time",
        times: []
      }
      this.cpu_graphics.data[numChatsKey] = {
        name: result.numChats+" room(s) - %CPU use",
        metrics: []
      }
      this.ram_graphics.data[numChatsKey] = {
        name: result.numChats+" room(s) - RAM use (in MBytes)",
        metrics: []
      }
      this.app_index[numChatsKey] = {};
    }

    if(this.app_index[numChatsKey][result.app] == undefined){
      // TIME
      this.time_graphics.data[numChatsKey].times.push({
        "name": result.app + " - "+result.numChats+" room(s) - Time",
        "series": []
      })
      // CPU
      this.cpu_graphics.data[numChatsKey].metrics.push({
        "name": result.app + " - "+result.numChats+" room(s) - %CPU use",
        "series": []
      })
      // RAM
      this.ram_graphics.data[numChatsKey].metrics.push({
        "name": result.app + " - "+result.numChats+" room(s) - Memory use (in MBytes)",
        "series": []
      })
      this.app_index[numChatsKey][result.app] = this.time_graphics.data[numChatsKey].times.length - 1;
    }

    let appIndex = this.app_index[numChatsKey][result.app];



    // METRICS GRAPHICS
    let ram:number = 0;
    let cpu:number = 0;

    for(let node of result.nodesMetrics){
      cpu += (node.cpuUse.reduce( (a,b) => a + b ) / node.cpuUse.length)
      ram += (node.ram.reduce( (a,b) => a + b ) / node.ram.length)
    }

    // TIME
    this.time_graphics.data[numChatsKey].times[appIndex].series.push({
      "name": result.numUsers.toString(),
      "value": result.avgTime
    });

    // CPU
    this.cpu_graphics.data[numChatsKey].metrics[appIndex].series.push({
      "name": result.numUsers.toString(),
      "value": cpu / result.nodesMetrics.length
    });

    // RAM
    this.ram_graphics.data[numChatsKey].metrics[appIndex].series.push({
      "name": result.numUsers.toString(),
      "value": ram / result.nodesMetrics.length
    });

    // FORCE UPDATE
    this.ram_graphics.data[numChatsKey].metrics = [...this.ram_graphics.data[numChatsKey].metrics];
    this.cpu_graphics.data[numChatsKey].metrics = [...this.cpu_graphics.data[numChatsKey].metrics];
    this.time_graphics.data[numChatsKey].times = [...this.time_graphics.data[numChatsKey].times];
  }

  cpu_node_graphics = {
    data: {}
  };
  ram_node_graphics = {
    data: {}
  };
  time_node_graphics = {
    data: {}
  };
  node_index = {};

  //nodeView = [300, 100]

  public nodeGraph(name: string, numChats: number){

    this.node_index = {};

    var appResults = this.results.filter((result: Result) => result.app == name && result.numChats == numChats);
    let numChatsKey = 'numChats-'+numChats;

    delete this.cpu_node_graphics.data[numChatsKey];
    delete this.ram_node_graphics.data[numChatsKey];
    delete this.time_node_graphics.data[numChatsKey];

    for(let result of appResults){

      if(this.time_node_graphics.data[numChatsKey] == undefined){
        this.time_node_graphics.data[numChatsKey] = {
          name: result.numChats+" room(s) - Time",
          times: [{
            "name": result.app + " - "+result.numChats+" room(s) - Time",
            "series": []
          }]
        }
      }

      // TIME
      this.time_node_graphics.data[numChatsKey].times[0].series.push({
        "name": result.numUsers.toString(),
        "value": result.avgTime
      });

      if(this.cpu_node_graphics.data[numChatsKey] == undefined){
        this.cpu_node_graphics.data[numChatsKey] = {
          name: result.numChats+" room(s) - CPU use",
          nodes: []
        }
      }

      if(this.ram_node_graphics.data[numChatsKey] == undefined){
        this.ram_node_graphics.data[numChatsKey] = {
          name: result.numChats+" room(s) - RAM use",
          nodes: []
        }
      }

      for(let node of result.nodesMetrics){

        if(!this.node_index[numChatsKey]) this.node_index[numChatsKey] = {};

        if(this.node_index[numChatsKey][node.id] == undefined){
          // CPU
          this.cpu_node_graphics.data[numChatsKey].nodes.push({
            "name": node.id,
            "series": []
          })
          // RAM
          this.ram_node_graphics.data[numChatsKey].nodes.push({
            "name": node.id,
            "series": []
          })
          this.node_index[numChatsKey][node.id] = this.cpu_node_graphics.data[numChatsKey].nodes.length - 1;
        }

        let node_index = this.node_index[numChatsKey][node.id];

        // CPU
        this.cpu_node_graphics.data[numChatsKey].nodes[node_index].series.push({
          "name": result.numUsers.toString(),
          "value": node.cpuUse.reduce( (a,b) => a + b ) / node.cpuUse.length
        });

        // RAM
        this.ram_node_graphics.data[numChatsKey].nodes[node_index].series.push({
          "name": result.numUsers.toString(),
          "value": node.ram.reduce( (a,b) => a + b ) / node.ram.length
        });

      }
    }
  }

  globalNumChatsKey:string;

  public tabf(index:number){
    let keys = this.keys(this.time_graphics.data);
    this.globalNumChatsKey = keys[index];
    this.tab=index;
    this.nodeGraph(this.selectedApp, this.chats_index[this.globalNumChatsKey])
    this.forceUpdate()
  }

  public tabApp(app:string){
    this.selectedApp = app;
    this.nodeGraph(this.selectedApp, this.chats_index[this.globalNumChatsKey])
    this.forceUpdate()
  }

  private forceUpdate(){
    let keys = this.keys(this.time_graphics.data);
    // FORCE UPDATE
    for (let key of keys) {
      this.time_graphics.data[key].times = [...this.time_graphics.data[key].times];
      this.ram_graphics.data[key].metrics = [...this.ram_graphics.data[key].metrics];
      this.cpu_graphics.data[key].metrics = [...this.cpu_graphics.data[key].metrics];
    }
  }

  public getAppColor(app:string){
    return this.colorScheme.domain[this.apps.indexOf(app)];
  }

  public getAppLineColor(){
    var color = {
      domain: [this.getAppColor(this.selectedApp)]
    };
    return color;
  }

  tab:number;

  timesConfig = {
    // Chart Options
    showXAxis: true,
    showYAxis : true,
    gradient : true,
    showLegend : true,
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

  timesNodeConfig = {
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

  cpuNodeConfig = {
    // Chart Options
    showXAxis: true,
    showYAxis : true,
    gradient : true,
    showLegend : false,
    showXAxisLabel : true,
    xAxisLabel : 'Nº of users per chat',
    showYAxisLabel : true,
    yAxisLabel : '% CPU used'
  }

  ramNodeConfig = {
    // Chart Options
    showXAxis: true,
    showYAxis : true,
    gradient : true,
    showLegend : false,
    showXAxisLabel : true,
    xAxisLabel : 'Nº of users per chat',
    showYAxisLabel : true,
    yAxisLabel : 'RAM used'
  }

  colorScheme = {
    domain: ['#B901FC', '#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  timeColor = {
    domain: ['#0c4fab']
  };

  metricsColors = {
    domain: ['#B03060','#FE9A76','#FFD700']
  }

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
