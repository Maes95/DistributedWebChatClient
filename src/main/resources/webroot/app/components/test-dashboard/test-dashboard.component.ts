import { Component, OnInit } from '@angular/core';
import { Result, Message } from '../../models/result';
import { VertEventBus } from '../../services/EventBus';
import { ExportService } from '../../services/export.service';
import { FakeResultsService } from '../../services/fakeResults.service';

declare var $:any;

@Component({
    selector: 'test-dashboard',
    templateUrl: '../app/components/test-dashboard/test-dashboard.component.html',
    providers: [VertEventBus,ExportService, FakeResultsService],
    styleUrls: ['./app/components/test-dashboard/test-dashboard.component.css']
})
export class TestDashboardComponent implements OnInit{

  // INPUT

  app: any;

  colors:number[][] = [
     [255, 99, 132],
     [54, 162, 235],
     [255, 206, 86],
     [165, 105, 189],
     [75, 192, 192],
     [151, 187, 205],
     [253, 180, 92],
     [148, 159, 177],
     [77, 83, 96]
  ];

  constructor(private _eventBus: VertEventBus, private _export: ExportService, private _fake: FakeResultsService){}

  ngOnInit(){

    this.tab = 0;

    this.app = {
      name: "",
      entryPoint: "",
      port: undefined,
      isDistributed: false,
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

    // this._eventBus.send("new.test", "HOLA", null, (a:any, msg:any) => {
    //   console.log(a, msg)
    // });
    //
    // this._eventBus.addHandler("new.result", (err:any, message:Message) => {
    //     console.log(message.body);
    // }, []);
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

  public launchCase(){
    this._fake.generateResults((result:Result)=> {
      if( result.app == "Vertx") this.addResult(result);
    });
  }

  // VIEW

  time_graphics = {};

  private addResult(result:Result){
    let chatSizeKey = 'time-'+result.chatSize;
    if(this.time_graphics[chatSizeKey] == undefined){
      this.time_graphics[chatSizeKey] = {
        name: result.chatSize+" room(s)",
        times: [{
          "name": result.app + " - "+result.chatSize+" room(s)",
          "series": []
        }]
      }
    }
    this.time_graphics[chatSizeKey].times[0].series.push({
      "name": result.numUsers,
      "value": result.avgTime
    });
    // FORCE UPDATE

    this.time_graphics[chatSizeKey].times = [...this.time_graphics[chatSizeKey].times];
  }

  tabf(index:number){
    // FORCE UPDATE
    for (let key in this.time_graphics) {
      var item = this.time_graphics[key];
      item.times = [...item.times];
    }
    this.tab=index;
  }

  tab:number;

  view: any[] = [900, 300];

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

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
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
