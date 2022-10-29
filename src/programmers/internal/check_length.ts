import ts from "typescript";

import { IMetadataTag } from "../../metadata/IMetadataTag";

/**
 * @internal
 */
export function check_length(
    conditions: ts.Expression[],
    length: ts.Expression,
    tag: Omit<IMetadataTag.ILength, "kind">,
) {
    if (
        tag.minimum !== undefined &&
        tag.maximum !== undefined &&
        tag.minimum.value === tag.maximum.value &&
        tag.minimum.include === true &&
        tag.maximum.include === true
    ) {
        conditions.push(
            ts.factory.createStrictEquality(
                ts.factory.createNumericLiteral(tag.minimum.value),
                length,
            ),
        );
    } else {
        if (tag.minimum !== undefined)
            conditions.push(
                (tag.minimum.include
                    ? ts.factory.createLessThanEquals
                    : ts.factory.createLessThan)(
                    ts.factory.createNumericLiteral(tag.minimum.value),
                    length,
                ),
            );
        if (tag.maximum !== undefined)
            conditions.push(
                (tag.maximum.include
                    ? ts.factory.createGreaterThanEquals
                    : ts.factory.createGreaterThan)(
                    ts.factory.createNumericLiteral(tag.maximum.value),
                    length,
                ),
            );
    }
}
