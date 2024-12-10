export type IValidation<T = unknown> =
  | IValidation.ISuccess<T>
  | IValidation.IFailure;
export namespace IValidation {
  export interface ISuccess<T = unknown> {
    success: true;
    data: T;
  }

  export interface IFailure {
    success: false;
    errors: IError[];
    data: unknown;
  }

  export interface IError {
    path: string;
    expected: string;
    value: any;
  }
}
