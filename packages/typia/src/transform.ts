import ts from "typescript";

import { FileTransformer } from "./transformers/FileTransformer";
import { ITransformOptions } from "./transformers/ITransformOptions";
import { ITypiaContext } from "./transformers/ITypiaContext";

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
