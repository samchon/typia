import ts from "typescript";

import { IdentifierFactory } from "../../factories/IdentifierFactory";

import { IMetadataTag } from "../../metadata/IMetadataTag";

/**
 * @internal
 */
export function check_array_length(
    input: ts.Expression,
    tagList: IMetadataTag[],
): ts.Expression | null {
    const conditions: ts.Expression[] = [];

    // CHECK TAGS
    for (const tag of tagList)
        if (tag.kind === "items")
            conditions.push(
                ts.factory.createStrictEquality(
                    ts.factory.createNumericLiteral(tag.value),
                    IdentifierFactory.join(input, "length"),
                ),
            );
        else if (tag.kind === "minItems")
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

    // COMBINATION
    return conditions.length
        ? conditions.reduce((x, y) => ts.factory.createLogicalAnd(x, y))
        : null;
}
