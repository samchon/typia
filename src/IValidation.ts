export interface IValidation {
    success: boolean;
    errors: IValidation.IError[];
}
export namespace IValidation {
    export interface IError {
        path: string;
        expected: string;
        value: any;
    }
}
