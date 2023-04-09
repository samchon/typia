export type IBenchmarkProgram<T> =
    | IBenchmarkProgram.ISuccessProgram<T>
    | IBenchmarkProgram.IFailureProgram<T>;
export namespace IBenchmarkProgram {
    export interface IMeasurement {
        amount: number;
        time: number;
    }

    export interface IUnit {
        label: string;
        divider: number;
    }

    export interface ISuccessProgram<T> extends IBaseProgram<T> {
        type: () => "success";
        success: (
            input: T,
        ) =>
            | IBenchmarkProgram.IMeasurement
            | Promise<IBenchmarkProgram.IMeasurement>;
    }
    export interface IFailureProgram<T> extends IBaseProgram<T[]> {
        type: () => "failure";
        failure: (
            input: T[],
        ) =>
            | IBenchmarkProgram.IMeasurement
            | Promise<IBenchmarkProgram.IMeasurement>;
    }
    interface IBaseProgram<T> {
        validate: (input: T) => boolean;
        skip: (name: string) => boolean;
    }
}
