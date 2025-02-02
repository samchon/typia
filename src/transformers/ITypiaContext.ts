import type ts from "typescript";

import type { ImportProgrammer } from "../programmers/ImportProgrammer";

import type { ITransformOptions } from "./ITransformOptions";

export interface ITypiaContext {
  program: ts.Program;
  compilerOptions: ts.CompilerOptions;
  checker: ts.TypeChecker;
  printer: ts.Printer;
  options: ITransformOptions;
  transformer: ts.TransformationContext;
  importer: ImportProgrammer;
  extras: {
    addDiagnostic: (diag: ts.Diagnostic) => number;
  };
}
