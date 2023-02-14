import ts from "typescript";

import { IdentifierFactory } from "../../factories/IdentifierFactory";

import { IMetadataTag } from "../../metadata/IMetadataTag";

import { FunctionImporter } from "../helpers/FunctionImporeter";

/**
 * @internal
 */
export const check_string_tags =
    (importer: FunctionImporter) =>
    (input: ts.Expression, tagList: IMetadataTag[]) => {
        const conditions: ts.Expression[] = [];
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
            else if (tag.kind === "length")
                conditions.push(
                    ts.factory.createStrictEquality(
                        ts.factory.createNumericLiteral(tag.value),
                        IdentifierFactory.join(input, "length"),
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
        return conditions;
    };
