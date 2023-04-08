export interface IBenchmarkProgram<T> {
    measure: (
        input: T,
    ) =>
        | IBenchmarkProgram.IMeasurement
        | Promise<IBenchmarkProgram.IMeasurement>;
    validate: (input: T) => boolean;
    skip: (name: string) => boolean;
}
export namespace IBenchmarkProgram {
    export interface IMeasurement {
        amount: number;
        time: number;
    }

    export interface IUnit {
        label: string;
        divider: number;
    }
}
