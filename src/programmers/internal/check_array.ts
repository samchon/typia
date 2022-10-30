import ts from "typescript";

import { ExpressionFactory } from "../../factories/ExpressionFactory";
import { IdentifierFactory } from "../../factories/IdentifierFactory";

import { IMetadataTag } from "../../metadata/IMetadataTag";

import { check_length } from "./check_length";

/**
 * @internal
 */
export function check_array(
    input: ts.Expression,
    tagList: IMetadataTag[],
): ts.Expression {
    const conditions: ts.Expression[] = [ExpressionFactory.isArray(input)];

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
    return conditions.reduce((x, y) => ts.factory.createLogicalAnd(x, y));
}
