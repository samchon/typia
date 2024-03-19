import type ts from "typescript";
import { Primitive } from "typia";

export interface ICompilerService {
  compile(
    target: "typescript" | "javascript",
    source: string,
  ): ICompilerService.IOutput;
  bundle(source: string): Promise<ICompilerService.IOutput>;
}
export namespace ICompilerService {
  export type IOutput = ISuccessOutput | IErrorOutput;
  export interface ISuccessOutput {
    success: true;
    target: "typescript" | "javascript";
    content: string;
    diagnostics: Primitive<ts.Diagnostic[]>;
  }
  export interface IErrorOutput {
    success: false;
    error: Error;
  }
}
