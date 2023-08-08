export interface IServerPerformanceProgram {
    open(): number | Promise<number>;
    close(): Promise<void>;
}
