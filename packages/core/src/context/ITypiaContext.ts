import ts from "typescript";

import { ImportProgrammer } from "../programmers/ImportProgrammer";
import { ITransformOptions } from "./ITransformOptions";

<<<<<<< HEAD
export interface ITypiaContext {
  program: ts.Program;
  compilerOptions: ts.CompilerOptions;
  checker: ts.TypeChecker;
  printer: ts.Printer;
  options: ITransformOptions;
  transformer: ts.TransformationContext;
  importer: ImportProgrammer;
  extras: {
=======
/**
 * Typia transformation context containing compiler dependencies.
 *
 * `ITypiaContext` holds all the dependencies needed during compilation when
 * transforming `typia.*<T>()` function calls into runtime validation code. This
 * context is created by the typia transformer and passed to all programmer
 * functions.
 *
 * The context provides access to:
 *
 * - TypeScript compiler APIs for type analysis ({@link checker})
 * - AST manipulation utilities ({@link printer}, {@link transformer})
 * - Import management ({@link importer})
 * - Error reporting ({@link extras})
 * - Configuration ({@link options})
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export interface ITypiaContext {
  /**
   * TypeScript program instance.
   *
   * The compiled TypeScript program containing all source files and type
   * information. Used to access the type checker and resolve type definitions
   * across files.
   */
  program: ts.Program;

  /**
   * TypeScript compiler options.
   *
   * The compiler options from `tsconfig.json`. Affects code generation
   * decisions like module format and strict mode settings.
   */
  compilerOptions: ts.CompilerOptions;

  /**
   * TypeScript type checker for type analysis.
   *
   * Provides type information for AST nodes. Used extensively to analyze
   * generic type parameters, resolve type aliases, and extract property
   * information from types.
   */
  checker: ts.TypeChecker;

  /**
   * TypeScript AST printer for code generation.
   *
   * Converts generated AST nodes back to TypeScript source code. Used for debug
   * output and error messages.
   */
  printer: ts.Printer;

  /**
   * Typia-specific transformer options.
   *
   * Configuration from the typia plugin in `tsconfig.json`. Controls validation
   * behavior for edge cases.
   */
  options: ITransformOptions;

  /**
   * TypeScript transformation context.
   *
   * Provides factory functions for creating AST nodes during transformation.
   * All generated code uses this context's factory.
   */
  transformer: ts.TransformationContext;

  /**
   * Import statement manager.
   *
   * Tracks and generates import statements for runtime dependencies. Ensures
   * required modules are imported when validation code references external
   * functions.
   */
  importer: ImportProgrammer;

  /**
   * Diagnostic utilities for error reporting.
   *
   * Provided by ts-patch or ttypescript for reporting compilation errors and
   * warnings. Used to surface transformation errors in the IDE and build
   * output.
   */
  extras: {
    /**
     * Adds a diagnostic message to the compilation output.
     *
     * @param diag - The diagnostic to report
     * @returns The diagnostic ID
     */
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
    addDiagnostic: (diag: ts.Diagnostic) => number;
  };
}
