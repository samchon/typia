import ts from "typescript";

import { IdentifierFactory } from "../../factories/IdentifierFactory";

import { IMetadataTag } from "../../metadata/IMetadataTag";

import { FunctionImporter } from "../helpers/FunctionImporeter";
import { check_length } from "./check_length";

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
                                `RegExp(/${tag.value}/).test`,
                            ),
                            undefined,
                            [input],
                        ),
                    ),
                );
            else if (tag.kind === "minLength")
                conditions.push(
                    ts.factory.createLessThanEquals(
                        ts.factory.createNumericLiteral(tag.value),
                        IdentifierFactory.join(input, "length"),
                    ),
                );
            else if (tag.kind === "maxLength")
                conditions.push(
                    ts.factory.createGreaterThanEquals(
                        ts.factory.createNumericLiteral(tag.value),
                        IdentifierFactory.join(input, "length"),
                    ),
                );
            else if (tag.kind === "length")
                check_length(
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
