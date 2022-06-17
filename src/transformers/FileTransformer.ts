import path from "path";
import ts from "typescript";
import { StatementFactory } from "../factories/programmatics/StatementFactory";
import { IModuleImport } from "../structures/IModuleImport";

import { IProject } from "../structures/IProject";
import { NodeTransformer } from "./NodeTransformer";

export namespace FileTransformer {
    export function transform(
        project: IProject,
        context: ts.TransformationContext,
        file: ts.SourceFile,
    ): ts.SourceFile {
        // DO NOT TRANSFORM D.TS FILE
        if (file.isDeclarationFile) return file;

        // CONFIGURE IMPORT RESOLVER
        const modulo: IModuleImport = {
            from: __filename.substr(-3) === ".js" ? "lib" : "src",
            name: `__TSON_` + Math.random().toString().slice(2),
            used: false,
        };

        // ITERATE NODES
        file = ts.visitEachChild(
            file,
            (node) => iterate_node(project, context, node, modulo),
            context,
        );

        // IMPORT REQUIRED MODULE
        if (modulo.used === true)
            file = ts.factory.updateSourceFile(file, [
                StatementFactory.require(
                    modulo.name,
                    modulo.from === "lib"
                        ? "typescript-json"
                        : get_import_path(file),
                ),
                ...file.statements,
            ]);
        return file;
    }

    function iterate_node(
        project: IProject,
        context: ts.TransformationContext,
        node: ts.Node,
        imp: IModuleImport,
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
        imp: IModuleImport,
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
        return path
            .relative(
                path.join(file.fileName, ".."),
                path.join(__dirname, "..", "index"),
            )
            .split(path.sep)
            .join("/");
    }
}
