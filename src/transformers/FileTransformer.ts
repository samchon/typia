import ts from "typescript";

import { IProject } from "./IProject";
import { NodeTransformer } from "./NodeTransformer";

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
        (node: ts.Node): ts.Node => {
            const changed: ts.Node | null = try_transform_node(project)(node);

            return ts.visitEachChild(
                changed ?? node,
                (child) => iterate_node(project)(context)(child),
                context,
            );
        };

    const try_transform_node =
        (project: IProject) =>
        (node: ts.Node): ts.Node | null => {
            try {
                return NodeTransformer.transform(project)(node);
            } catch (exp) {
                if (!(exp instanceof Error)) throw exp;

                const file: ts.SourceFile | undefined = node.getSourceFile();
                if (file === undefined) throw exp;

                const diagnostic = ts.createDiagnosticForNode(node, {
                    key: exp.message,
                    category: ts.DiagnosticCategory.Error,
                    message: exp.message,
                    code: 1,
                });
                project.extras.addDiagnostic(diagnostic);
                return null;
            }
        };
}
