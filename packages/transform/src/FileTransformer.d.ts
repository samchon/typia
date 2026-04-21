import { ITypiaContext } from "@typia/core";
import ts from "typescript";
/**
 * TypeScript source file transformer for typia.
 *
 * Entry point for typia's compile-time transformation. Traverses AST nodes,
 * transforms `typia.*` function calls into optimized runtime code, and injects
 * required imports. Skips declaration files.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export declare namespace FileTransformer {
    const transform: (environments: Omit<ITypiaContext, "transformer" | "importer">) => (transformer: ts.TransformationContext) => (file: ts.SourceFile) => ts.SourceFile;
}
