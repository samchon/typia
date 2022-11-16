export type IValidation<T = unknown> =
    | IValidation.ISuccess<T>
    | IValidation.IFailure;
export namespace IValidation {
    export interface ISuccess<T> {
        success: true;
        data: T;
        errors: [];
    }

    export interface IFailure {
        success: false;
        data: unknown;
        errors: IError[];
    }

    export interface IError {
        path: string;
        expected: string;
        value: any;
    }
}
