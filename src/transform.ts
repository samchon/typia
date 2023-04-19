import ts from "typescript";

import { FileTransformer } from "./transformers/FileTransformer";
import { IProject } from "./transformers/IProject";
import { ITransformOptions } from "./transformers/ITransformOptions";

export function transform(
    program: ts.Program,
    options?: ITransformOptions,
): ts.TransformerFactory<ts.SourceFile> {
    const project: IProject = {
        program,
        compilerOptions: program.getCompilerOptions(),
        checker: program.getTypeChecker(),
        printer: ts.createPrinter(),
        options: options || {},
    };
    return FileTransformer.transform(project);
}
export default transform;
