import ts from "typescript";

import { FileTransformer } from "./transformers/FileTransformer";
import { ITransformOptions } from "./transformers/ITransformOptions";

export const transform = (
    program: ts.Program,
    options?: ITransformOptions,
): ts.TransformerFactory<ts.SourceFile> =>
    FileTransformer.transform({
        program,
        compilerOptions: program.getCompilerOptions(),
        checker: program.getTypeChecker(),
        printer: ts.createPrinter(),
        options: options || {},
    });
export default transform;
