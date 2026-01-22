import ts from "typescript";

import { ImportProgrammer } from "../programmers/ImportProgrammer";

import { ITransformOptions } from "./ITransformOptions";

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
