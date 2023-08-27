import ts from "typescript";

import { ITransformOptions } from "./ITransformOptions";

export interface IProject {
    program: ts.Program;
    compilerOptions: ts.CompilerOptions;
    checker: ts.TypeChecker;
    printer: ts.Printer;
    options: ITransformOptions;
    context: ts.TransformationContext;
    extras: {
        addDiagnostic: (diag: ts.Diagnostic) => number;
    };
}
