import path from "path";
import ts from "typescript";
import { StatementFactory } from "../factories/programmatics/StatementFactory";
import { IModule } from "../structures/IModule";

import { IProject } from "../structures/IProject";
import { NodeTransformer } from "./NodeTransformer";

export namespace FileTransformer {
    export function transform(
        project: IProject,
        context: ts.TransformationContext,
        file: ts.SourceFile,
    ): ts.SourceFile {
        const modulo: IModule = {
            error: {
                name: `__TypeGuardError_` + Math.random().toString().slice(2),
                used: false,
            },
            functional: {
                name: "__Functional_" + Math.random().toString().slice(2),
                used: false,
            },
        };

        file = ts.visitEachChild(
            file,
            (node) => iterate_node(project, context, node, modulo),
            context,
        );

        const requires: ts.ImportDeclaration[] = [...Object.entries(modulo)]
            .filter(([_key, value]) => value.used)
            .map(([key, value]) =>
                StatementFactory.require(
                    value.name,
                    get_import_path(file, IMPORT_PATHS[key as "error"]),
                ),
            );

        if (requires.length)
            file = ts.factory.updateSourceFile(file, [
                ...requires,
                ...file.statements,
            ]);
        return file;
    }

    function iterate_node(
        project: IProject,
        context: ts.TransformationContext,
        node: ts.Node,
        imp: IModule,
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
        imp: IModule,
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

    function get_import_path(file: ts.SourceFile, location: string): string {
        return path
            .relative(path.join(file.fileName, ".."), location)
            .split(path.sep)
            .join("/");
    }
}

const IMPORT_PATHS = {
    error: path.join(__dirname, "..", "TypeGuardError"),
    functional: path.join(__dirname, "..", "functional", "index"),
};
