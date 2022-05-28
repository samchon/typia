import ts from "typescript";

export interface IProject {
    program: ts.Program;
    compilerOptions: ts.CompilerOptions;
    checker: ts.TypeChecker;
    printer: ts.Printer;
    options: IProject.IOptions;
}
export namespace IProject {
    export interface IOptions {}
}
