import ts from "typescript";

import { FileTransformer } from "./transformers/FileTransformer";
import { ITransformOptions } from "./transformers/ITransformOptions";

export const transform = (
    program: ts.Program,
    options?: ITransformOptions,
): ts.TransformerFactory<ts.SourceFile> => {
    const compilerOptions: ts.CompilerOptions = program.getCompilerOptions();
    const strict: boolean =
        compilerOptions.strictNullChecks !== undefined
            ? !!compilerOptions.strictNullChecks
            : !!compilerOptions.strict;
    if (strict === false)
        throw new Error(
            `Error on "tsconfig.json": typia requires \`compilerOptions.strictNullChecks\` to be true.`,
        );
    return FileTransformer.transform({
        program,
        compilerOptions,
        checker: program.getTypeChecker(),
        printer: ts.createPrinter(),
        options: options || {},
    });
};
export default transform;
