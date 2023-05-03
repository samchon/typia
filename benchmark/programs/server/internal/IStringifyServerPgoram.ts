export interface IStringifyServerProgram<T> {
    open(data: T[]): number | Promise<number>;
    close(): Promise<void>;
}
