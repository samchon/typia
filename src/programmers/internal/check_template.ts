import ts from "typescript";

import { IMetadataTag } from "../../metadata/IMetadataTag";
import { Metadata } from "../../metadata/Metadata";

import { FunctionImporter } from "../helpers/FunctionImporeter";
import { check_string_tags } from "./check_string_tags";
import { template_to_pattern } from "./template_to_pattern";

/**
 * @internal
 */
export const check_template =
    (importer: FunctionImporter) =>
    (
        input: ts.Expression,
        templates: Metadata[][],
        tagList: IMetadataTag[],
    ) => {
        // TYPEOF STRING & TAGS
        const conditions: ts.Expression[] = [
            ts.factory.createStrictEquality(
                ts.factory.createStringLiteral("string"),
                ts.factory.createTypeOfExpression(input),
            ),
            ...check_string_tags(importer)(input, tagList),
        ];

        // TEMPLATES
        const internal = templates.map((tpl) =>
            ts.factory.createStrictEquality(
                ts.factory.createTrue(),
                ts.factory.createCallExpression(
                    ts.factory.createIdentifier(
                        `RegExp(/${template_to_pattern(true)(tpl)}/).test`,
                    ),
                    undefined,
                    [input],
                ),
            ),
        );
        conditions.push(
            internal.length === 1
                ? internal[0]!
                : internal.reduce((x, y) => ts.factory.createLogicalOr(x, y)),
        );

        // COMBINATION
        return conditions.reduce((x, y) => ts.factory.createLogicalAnd(x, y));
    };
