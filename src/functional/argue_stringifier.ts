import ts from "typescript";
import { JsonFactory } from "../factories/JsonFactory";

import { SchemaFactory } from "../factories/SchemaFactory";
import { IProject } from "../structures/IProject";
import { ISchema } from "../structures/ISchema";

export function argue_stringifier
    (
        project: IProject, 
        type: ts.Type,
    ): ts.ArrowFunction
{
    const app: ISchema.IApplication | null = SchemaFactory.generate(project.checker, type);
    const tuple: ts.ArrayLiteralExpression = JsonFactory.application(app);

    return ts.factory.createArrowFunction
    (
        undefined,
        undefined,
        [],
        undefined,
        undefined,
        tuple
    );
}