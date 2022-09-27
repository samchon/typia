import ts from "typescript";

import { IMetadataTag } from "../../metadata/IMetadataTag";

import { FunctionImporter } from "../helpers/FunctionImporeter";
import { check_string_tags } from "./check_string_tags";

/**
 * @internal
 */
export function check_string(importer: FunctionImporter) {
    return function (input: ts.Expression, tagList: IMetadataTag[]) {
        const conditions: ts.Expression[] = [
            ts.factory.createStrictEquality(
                ts.factory.createStringLiteral("string"),
                ts.factory.createTypeOfExpression(input),
            ),
            ...check_string_tags(importer)(input, tagList),
        ];
        return conditions.length === 1
            ? conditions[0]!
            : conditions.reduce((x, y) => ts.factory.createLogicalAnd(x, y));
    };
}
