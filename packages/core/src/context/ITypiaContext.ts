import ts from "typescript";

import { ImportProgrammer } from "../programmers/ImportProgrammer";
import { ITransformOptions } from "./ITransformOptions";

/**
 * Typia transformation context.
 *
 * Provides TypeScript compiler APIs and typia-specific utilities
 * for code transformation.
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
