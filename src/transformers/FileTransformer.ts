import ts from "typescript";

import { IProject } from "./IProject";
import { NodeTransformer } from "./NodeTransformer";
import { TransformerError } from "./TransformerError";

export namespace FileTransformer {
    export const transform =
        (project: Omit<IProject, "context">) =>
        (context: ts.TransformationContext) =>
        (file: ts.SourceFile): ts.SourceFile => {
            if (file.isDeclarationFile) return file;
            return ts.visitEachChild(
                file,
                (node) => iterate_node({ ...project, context })(context)(node),
                context,
            );
        };

    const iterate_node =
        (project: IProject) =>
        (context: ts.TransformationContext) =>
        (node: ts.Node): ts.Node =>
            ts.visitEachChild(
                try_transform_node(project)(node) ?? node,
                (child) => iterate_node(project)(context)(child),
                context,
            );

    const try_transform_node =
        (project: IProject) =>
        (node: ts.Node): ts.Node | null => {
            try {
                return NodeTransformer.transform(project)(node);
            } catch (exp) {
                // ONLY ACCEPT TRANSFORMER-ERROR
                if (!isTransformerError(exp)) throw exp;

                // REPORT DIAGNOSTIC
                const diagnostic = ts.createDiagnosticForNode(node, {
                    key: exp.code,
                    category: ts.DiagnosticCategory.Error,
                    message: exp.message,
                    code: `(${exp.code})` as any,
                });
                project.extras.addDiagnostic(diagnostic);
                return null;
            }
        };
}

const isTransformerError = (error: any): error is TransformerError =>
    typeof error === "object" &&
    error !== null &&
    error.constructor.name === "TransformerError" &&
    typeof error.code === "string" &&
    typeof error.message === "string";
