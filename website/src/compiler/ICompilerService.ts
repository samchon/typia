import { ITransformOptions } from "../../../src/transformers/ITransformOptions";

export interface ICompilerService {
  compile(source: string, options?: ITransformOptions): Promise<ICompilerService.IOutput>;
  transform(source: string, options?: ITransformOptions): Promise<ICompilerService.IOutput>;
  bundle(source: string, options?: ITransformOptions): Promise<ICompilerService.IOutput>;
}
export namespace ICompilerService {
  export type IOutput = ISuccess | IFailure | IError;
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
