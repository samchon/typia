import { ITransformOptions, ITypiaContext } from "@typia/core";
import ts from "typescript";

import { FileTransformer } from "./FileTransformer";

export * from "./ImportTransformer";

/**
 * TypeScript transformer for typia.
 *
 * Converts `typia.*<T>()` function calls into optimized runtime code.
 * Requires `strictNullChecks` or `strict` mode enabled.
 *
 * @param program TypeScript program instance
 * @param options Transformer options
 * @param extras Transformer context with diagnostic utilities
 * @returns Transformer factory for source file processing
 */
export const transform = (
  program: ts.Program,
  options: ITransformOptions | undefined,
  extras: ITypiaContext["extras"],
): ts.TransformerFactory<ts.SourceFile> => {
  const compilerOptions: ts.CompilerOptions = program.getCompilerOptions();
  const strict: boolean =
    compilerOptions.strictNullChecks !== undefined
      ? !!compilerOptions.strictNullChecks
      : !!compilerOptions.strict;
  if (strict === false)
    extras.addDiagnostic({
      category: ts.DiagnosticCategory.Error,
      code: "(typia)" as any,
      file: undefined,
      start: undefined,
      length: undefined,
      messageText: "strict mode is required.",
    });
  return FileTransformer.transform({
    program,
    compilerOptions,
    checker: program.getTypeChecker(),
    printer: ts.createPrinter(),
    options: options ?? {},
    extras,
  });
};
export default transform;
