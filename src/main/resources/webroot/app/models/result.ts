export interface Message<T>{
  body:T;
}

export interface Result{
  numChats: number;
  numUsers: number;
  app: string;
  globalDefinition: string;
  specificDefinition: string;
  avgTime: number;
  times: number[];
  isDistributed?: boolean;
  nodesMetrics: {
      id: string;
      cpuUse: number[];
      ram: number[];
  }[];
}
