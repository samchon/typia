import { ITransformOptions, ITypiaContext } from "@typia/core";
import ts from "typescript";

import { FileTransformer } from "./FileTransformer";

/**
 * TypeScript transformer for typia runtime code generation.
 *
 * `transform` is the entry point for typia's compile-time transformation. It
 * converts `typia.*<T>()` function calls (e.g., `typia.is<User>(data)`) into
 * optimized runtime validation, serialization, or transformation code.
 *
 * The transformer analyzes the generic type parameter `T` at compile time and
 * generates specialized code that performs type checking without runtime
 * reflection. This approach provides both type safety and high performance.
 *
 * **Requirements:**
 *
 * - TypeScript's `strictNullChecks` or `strict` compiler option must be enabled
 * - The transformer must be configured in `tsconfig.json` via ts-patch or
 *   ttypescript
 *
 * **Configuration example (tsconfig.json):**
 *
 * ```json
 * {
 *   "compilerOptions": {
 *     "strict": true,
 *     "plugins": [{ "transform": "typia/lib/transform" }]
 *   }
 * }
 * ```
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @param program TypeScript program instance from the compiler
 * @param options Optional transformer configuration (finite, numeric,
 *   functional, undefined)
 * @param extras Diagnostic utilities for error reporting during transformation
 * @returns Transformer factory that processes source files
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
