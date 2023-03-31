import ts from "typescript";

import { ExpressionFactory } from "../../factories/ExpressionFactory";

import { IJsDocTagInfo } from "../../metadata/IJsDocTagInfo";
import { IMetadataTag } from "../../metadata/IMetadataTag";

import { FunctionImporter } from "../helpers/FunctionImporeter";
import { check_array_length } from "./check_array_length";
import { check_custom } from "./check_custom";

/**
 * @internal
 */
export const check_array =
    (importer: FunctionImporter) =>
    (
        input: ts.Expression,
        metaTags: IMetadataTag[],
        jsDocTags: IJsDocTagInfo[],
    ): ts.Expression => {
        const conditions: ts.Expression[] = [ExpressionFactory.isArray(input)];

        const length: ts.Expression | null = check_array_length(
            input,
            metaTags,
        );
        if (length !== null) conditions.push(length);
        conditions.push(...check_custom("array")(importer)(input, jsDocTags));
        return conditions.reduce((x, y) => ts.factory.createLogicalAnd(x, y));
    };
