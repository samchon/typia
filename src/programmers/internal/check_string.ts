import ts from "typescript";

import { IMetadataTag } from "../../metadata/IMetadataTag";

import { FunctionImporter } from "../helpers/FunctionImporeter";
import { check_custom } from "./check_custom";
import { check_string_tags } from "./check_string_tags";

/**
 * @internal
 */
export function check_string(importer: FunctionImporter) {
    return function (
        input: ts.Expression,
        metaTags: IMetadataTag[],
        jsDocTags: ts.JSDocTagInfo[],
    ) {
        const conditions: ts.Expression[] = [
            ts.factory.createStrictEquality(
                ts.factory.createStringLiteral("string"),
                ts.factory.createTypeOfExpression(input),
            ),
            ...check_string_tags(importer)(input, metaTags),
            ...check_custom("string")(importer)(input, jsDocTags),
        ];
        return conditions.length === 1
            ? conditions[0]!
            : conditions.reduce((x, y) => ts.factory.createLogicalAnd(x, y));
    };
}
