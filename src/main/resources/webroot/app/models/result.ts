export interface Message{
  body:Result;
}

export interface Result{
  numChats: number;
  numUsers: number;
  app: string;
  globalDefinition: string;
  specificDefinition: string;
  avgTime: number;
  times: number[];
  nodesMetrics: {
      id: string;
      cpuUse: number[];
      ram: number[];
  }[];
}