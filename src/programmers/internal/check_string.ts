import ts from "typescript";

import { IdentifierFactory } from "../../factories/IdentifierFactory";

import { IMetadataTag } from "../../metadata/IMetadataTag";

import { FunctionImporter } from "../helpers/FunctionImporeter";

export function check_string(importer: FunctionImporter) {
    return function (input: ts.Expression, tagList: IMetadataTag[]) {
        // TYPEOF
        const conditions: ts.Expression[] = [
            ts.factory.createStrictEquality(
                ts.factory.createStringLiteral("string"),
                ts.factory.createTypeOfExpression(input),
            ),
        ];

        // TAG
        for (const tag of tagList)
            if (tag.kind === "format")
                conditions.push(
                    ts.factory.createStrictEquality(
                        ts.factory.createTrue(),
                        ts.factory.createCallExpression(
                            importer.use(`is_${tag.value}`),
                            undefined,
                            [input],
                        ),
                    ),
                );
            else if (tag.kind === "pattern")
                conditions.push(
                    ts.factory.createStrictEquality(
                        ts.factory.createTrue(),
                        ts.factory.createCallExpression(
                            ts.factory.createIdentifier(
                                `RegExp(${tag.value}).test`,
                            ),
                            undefined,
                            [input],
                        ),
                    ),
                );
            else if (tag.kind === "length")
                check_string_length(
                    conditions,
                    IdentifierFactory.join(input, "length"),
                    tag,
                );

        // COMBINATION
        return conditions.length === 1
            ? conditions[0]!
            : conditions.reduce((x, y) => ts.factory.createLogicalAnd(x, y));
    };
}

function check_string_length(
    conditions: ts.Expression[],
    length: ts.Expression,
    tag: IMetadataTag.ILength,
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
                    ? ts.factory.createLessThanEquals
                    : ts.factory.createLessThan)(
                    length,
                    ts.factory.createNumericLiteral(tag.maximum.value),
                ),
            );
    }
}
