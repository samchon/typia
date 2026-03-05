export interface IServerAssertProgram {
  open(): number | Promise<number>;
  close(): Promise<void>;
}
