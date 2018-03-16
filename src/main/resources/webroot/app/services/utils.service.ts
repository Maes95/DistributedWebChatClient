import { Injectable } from "@angular/core";

@Injectable()
export class UtilsService {

  public checkNodeExist(url:string, success: Function, error: Function){
    let ws = new WebSocket("ws://" + url +"/chat");
    ws.onopen = () => {
      success();
      ws.close();
    };
    ws.onerror = () => {
      error();
      ws.close();
    };
  }
}
