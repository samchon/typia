import crypto from "crypto";
import ts from "typescript";

import { JsonFactory } from "../factories/JsonFactory";
import { SchemaFactory } from "../factories/SchemaFactory";
import { IProject } from "../structures/IProject";
import { ISchema } from "../structures/IMetadata";

export function argue_stringify
    (
        project: IProject, 
        type: ts.Type,
        node: ts.TypeNode,
    ): ts.ArrayLiteralExpression
{
    const app: ISchema.IApplication | null = SchemaFactory.generate(project.checker, type);
    const tuple: ts.ArrayLiteralExpression = JsonFactory.application(app);
    const script: string = project.printer.printNode
    (
        ts.EmitHint.Unspecified, 
        tuple,
        node.getSourceFile()
    );
    const key: string = crypto
        .createHash("sha256")
        .update(script)
        .digest("base64");

    return ts.factory.createArrayLiteralExpression
    ([
        ts.factory.createStringLiteral(key),
        ts.factory.createArrowFunction
        (
            undefined,
            undefined,
            [],
            undefined,
            undefined,
            tuple
        )
    ]);
}