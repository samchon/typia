export interface IServerStringifyProgram<T> {
  open(data: T): number | Promise<number>;
  close(): Promise<void>;
}
