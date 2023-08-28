import ts from "typescript";

import { FileTransformer } from "./transformers/FileTransformer";
import { IProject } from "./transformers/IProject";
import { ITransformOptions } from "./transformers/ITransformOptions";

export const transform = (
    program: ts.Program,
    options: ITransformOptions | undefined,
    extras: IProject["extras"],
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
