import ts from "typescript";

import { IMetadataTag } from "../../schemas/metadata/IMetadataTag";

import { FunctionImporter } from "../helpers/FunctionImporeter";
import { check_custom } from "./check_custom";
import { check_string_tags } from "./check_string_tags";

/**
 * @internal
 */
export const check_string =
    (importer: FunctionImporter) =>
    (metaTags: IMetadataTag[]) =>
    (jsDocTags: ts.JSDocTagInfo[]) =>
    (input: ts.Expression) => ({
        expression: ts.factory.createStrictEquality(
            ts.factory.createStringLiteral("string"),
            ts.factory.createTypeOfExpression(input),
        ),
        tags: [
            ...check_string_tags(importer)(metaTags)(input),
            ...check_custom("string")(importer)(jsDocTags)(input),
        ],
    });
