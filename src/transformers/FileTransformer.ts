import path from "path";
import ts from "typescript";
import { StatementFactory } from "../factories/programmatics/StatementFactory";
import { ITypeGuardErrorModulo } from "../structures/ITypeGuardErrorModulo";

import { IProject } from "../structures/IProject";
import { NodeTransformer } from "./NodeTransformer";

export namespace FileTransformer {
    export function transform(
        project: IProject,
        context: ts.TransformationContext,
        file: ts.SourceFile,
    ): ts.SourceFile {
        const imp: ITypeGuardErrorModulo = {
            name: `__TypeGuardError` + Math.random().toString().slice(2),
            used: false,
        };

        file = ts.visitEachChild(
            file,
            (node) => iterate_node(project, context, node, imp),
            context,
        );
        if (imp.used === true) {
            file = ts.factory.updateSourceFile(file, [
                StatementFactory.require(imp.name, get_import_path(file)),
                ...file.statements,
            ]);
        }

        return file;
    }

    function iterate_node(
        project: IProject,
        context: ts.TransformationContext,
        node: ts.Node,
        imp: ITypeGuardErrorModulo,
    ): ts.Node {
        return ts.visitEachChild(
            try_transform_node(project, node, imp),
            (child) => iterate_node(project, context, child, imp),
            context,
        );
    }

    function try_transform_node(
        project: IProject,
        node: ts.Node,
        imp: ITypeGuardErrorModulo,
    ): ts.Node {
        try {
            return NodeTransformer.transform(project, node, imp);
        } catch (exp) {
            if (
                !(exp instanceof Error) ||
                exp.message.indexOf("Error on TSON") !== -1
            )
                throw exp;

            const file: ts.SourceFile = node.getSourceFile();
            const { line, character } = file.getLineAndCharacterOfPosition(
                node.pos,
            );
            exp.message += ` - ${line + 1}:${character + 1}`;
            throw exp;
        }
    }

    function get_import_path(file: ts.SourceFile): string {
        const absolute: string = path.join(__dirname, "..", "TypeGuardError");
        return path
            .relative(path.join(file.fileName, ".."), absolute)
            .split(path.sep)
            .join("/");
    }
}
