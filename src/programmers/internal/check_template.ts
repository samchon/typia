import ts from "typescript";

import { IJsDocTagInfo } from "../../schemas/metadata/IJsDocTagInfo";
import { IMetadataTag } from "../../schemas/metadata/IMetadataTag";
import { Metadata } from "../../schemas/metadata/Metadata";

import { FunctionImporter } from "../helpers/FunctionImporeter";
import { ICheckEntry } from "../helpers/ICheckEntry";
import { check_custom } from "./check_custom";
import { check_string_tags } from "./check_string_tags";
import { template_to_pattern } from "./template_to_pattern";

/**
 * @internal
 */
export const check_template =
    (importer: FunctionImporter) =>
    (metaTags: IMetadataTag[]) =>
    (jsDocTags: IJsDocTagInfo[]) =>
    (templates: Metadata[][]) =>
    (input: ts.Expression): ICheckEntry => {
        // TYPEOF STRING & TAGS
        const conditions: ts.Expression[] = [
            ts.factory.createStrictEquality(
                ts.factory.createStringLiteral("string"),
                ts.factory.createTypeOfExpression(input),
            ),
        ];

        // TEMPLATES
        const internal: ts.Expression[] = templates.map((tpl) =>
            ts.factory.createCallExpression(
                ts.factory.createIdentifier(
                    `RegExp(/${template_to_pattern(true)(tpl)}/).test`,
                ),
                undefined,
                [input],
            ),
        );
        conditions.push(
            internal.length === 1
                ? internal[0]!
                : internal.reduce((x, y) => ts.factory.createLogicalOr(x, y)),
        );

        // COMBINATION
        return {
            expression: conditions.reduce((x, y) =>
                ts.factory.createLogicalAnd(x, y),
            ),
            tags: [
                ...check_string_tags(importer)(metaTags)(input),
                ...check_custom("string")(importer)(jsDocTags)(input),
            ],
        };
    };
