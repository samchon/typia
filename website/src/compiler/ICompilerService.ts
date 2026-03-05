import { ITransformOptions } from "@typia/core";

export interface ICompilerService {
  compile(props: ICompilerService.IProps): Promise<ICompilerService.IResult>;
  transform(props: ICompilerService.IProps): Promise<ICompilerService.IResult>;
  bundle(props: ICompilerService.IProps): Promise<ICompilerService.IResult>;
}
export namespace ICompilerService {
  export interface IProps {
    source: string;
    options?: ITransformOptions;
  }
  export type IResult = ISuccess | IFailure | IError;

  export interface ISuccess extends IBase<"success", string> {}
  export interface IFailure extends IBase<"failure", string> {
    diagnostics: object[];
  }
  export interface IError extends IBase<"error", unknown> {}
  interface IBase<Type extends string, Value> {
    type: Type;
    target: "typescript" | "javascript";
    value: Value;
  }
}
