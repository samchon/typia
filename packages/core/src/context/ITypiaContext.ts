import ts from "typescript";

import { ImportProgrammer } from "../programmers/ImportProgrammer";
import { ITransformOptions } from "./ITransformOptions";

/**
 * Typia transformation context.
 *
 * Contains all dependencies needed during `typia.*<T>()` function call
 * transformation: TypeScript compiler APIs ({@link checker}, {@link printer}),
 * transformation context ({@link transformer}), import manager
 * ({@link importer}), and diagnostic reporting ({@link extras}).
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export interface ITypiaContext {
  /** TypeScript program instance. */
  program: ts.Program;

  /** TypeScript compiler options. */
  compilerOptions: ts.CompilerOptions;

  /** TypeScript type checker. */
  checker: ts.TypeChecker;

  /** TypeScript AST printer. */
  printer: ts.Printer;

  /** Typia transformer options. */
  options: ITransformOptions;

  /** TypeScript transformation context. */
  transformer: ts.TransformationContext;

  /** Import statement manager. */
  importer: ImportProgrammer;

  /** Diagnostic utilities from ts-patch/ttypescript. */
  extras: {
    addDiagnostic: (diag: ts.Diagnostic) => number;
  };
}
