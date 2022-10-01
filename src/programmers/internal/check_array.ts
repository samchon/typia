import ts from "typescript";

import { IdentifierFactory } from "../../factories/IdentifierFactory";

import { IMetadataTag } from "../../metadata/IMetadataTag";

import { check_length } from "./check_length";

/**
 * @internal
 */
export function check_array(
    input: ts.Expression,
    arrow: ts.ArrowFunction,
    tagList: IMetadataTag[],
    every?: ts.Expression,
): ts.Expression {
    // INSPECT EVERY ELEMENTS
    const conditions: ts.Expression[] = [
        every ||
            ts.factory.createCallExpression(
                IdentifierFactory.join(input, "every"),
                undefined,
                [arrow],
            ),
    ];

    // CHECK TAGS
    for (const tag of tagList)
        if (tag.kind === "minItems")
            conditions.push(
                ts.factory.createLessThanEquals(
                    ts.factory.createNumericLiteral(tag.value),
                    IdentifierFactory.join(input, "length"),
                ),
            );
        else if (tag.kind === "maxItems")
            conditions.push(
                ts.factory.createGreaterThanEquals(
                    ts.factory.createNumericLiteral(tag.value),
                    IdentifierFactory.join(input, "length"),
                ),
            );
        else if (tag.kind === "items")
            check_length(
                conditions,
                IdentifierFactory.join(input, "length"),
                tag,
            );

    // COMBINATION
    return conditions.length === 1
        ? conditions[0]!
        : conditions
              .reverse()
              .reduce((x, y) => ts.factory.createLogicalAnd(x, y));
}
