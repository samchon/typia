import ts from "typescript";

import { ITransformOptions } from "./ITransformOptions";

export interface ITypiaContext {
  program: ts.Program;
  compilerOptions: ts.CompilerOptions;
  checker: ts.TypeChecker;
  printer: ts.Printer;
  options: ITransformOptions;
  transformer: ts.TransformationContext;
  extras: {
    addDiagnostic: (diag: ts.Diagnostic) => number;
  };
}
