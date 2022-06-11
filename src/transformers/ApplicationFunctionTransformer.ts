import ts from "typescript";

import { ExpressionFactory } from "../factories/ExpressionFactory";
import { MetadataFactory } from "../factories/MetadataFactory";
import { SchemaFactory } from "../factories/SchemaFactory";

import { IJsonApplication } from "../module";
import { IMetadata } from "../structures/IMetadata";
import { IProject } from "../structures/IProject";

export namespace ApplicationFunctionTransformer {
    export function transform(
        project: IProject,
        expression: ts.CallExpression,
    ): ts.Expression {
        // GET TYPE
        const node: ts.TypeNode | null =
            (expression.typeArguments || [])[0] || null;
        const type: ts.Type | null =
            node !== null ? project.checker.getTypeFromTypeNode(node) : null;

        if (type === null)
            throw new Error(
                "Error on TSON.application(): no generic argument.",
            );

        // GENERATE APPLICATION
        const metadata: IMetadata.IApplication | null =
            MetadataFactory.generate(project.checker, type);
        const application: IJsonApplication = SchemaFactory.application(
            metadata,
            SchemaFactory.SWAGGER_PREFIX,
            false,
        );
        const literal = ExpressionFactory.generate(application);

        // RETURNS SELF CALLING FUNCTION
        const arrow: ts.ArrowFunction = ts.factory.createArrowFunction(
            undefined,
            undefined,
            [],
            undefined,
            undefined,
            literal,
        );
        return ts.factory.createCallExpression(arrow, [], []);
    }
}
