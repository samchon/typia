import ts from "typescript";

import { MetadataObject } from "../../metadata/MetadataObject";

import { metadata_to_pattern } from "./metadata_to_pattern";

/**
 * @internal
 */
export const prune_object_properties = (obj: MetadataObject) => {
    const input: ts.Expression = ts.factory.createIdentifier("input");
    const key: ts.Expression = ts.factory.createIdentifier("key");

    const condition: ts.Expression[] = obj.properties.map((prop) => {
        const name: string | null = prop.key.getSoleLiteral();
        if (name !== null)
            return ts.factory.createStrictEquality(
                ts.factory.createStringLiteral(name),
                ts.factory.createIdentifier("key"),
            );
        return ts.factory.createCallExpression(
            ts.factory.createIdentifier(
                `RegExp(/${metadata_to_pattern(true)(prop.key)}/).test`,
            ),
            undefined,
            [key],
        );
    });

    const statements: ts.Statement[] = [];
    if (condition.length)
        statements.push(
            ts.factory.createIfStatement(
                condition.reduce((a, b) => ts.factory.createLogicalOr(a, b)),
                ts.factory.createContinueStatement(),
            ),
        );
    statements.push(
        ts.factory.createExpressionStatement(
            ts.factory.createDeleteExpression(
                ts.factory.createElementAccessExpression(input, key),
            ),
        ),
    );
    return statements;
};
