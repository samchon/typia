import ts from "typescript";

import { ExpressionFactory } from "../../factories/ExpressionFactory";
import { IdentifierFactory } from "../../factories/IdentifierFactory";

import { IJsDocTagInfo } from "../../schemas/metadata/IJsDocTagInfo";
import { IMetadataTag } from "../../schemas/metadata/IMetadataTag";

import { FunctionImporter } from "../helpers/FunctionImporeter";
import { ICheckEntry } from "../helpers/ICheckEntry";
import { check_array_length } from "./check_array_length";
import { check_custom } from "./check_custom";

/**
 * @internal
 */
export const check_array =
    (importer: FunctionImporter) =>
    (metaTags: IMetadataTag[]) =>
    (jsDocTags: IJsDocTagInfo[]) =>
    (input: ts.Expression): ICheckEntry => ({
        expression: ExpressionFactory.isArray(input),
        tags: [
            ...check_array_length(metaTags)(
                IdentifierFactory.access(input)("length"),
            ),
            ...check_custom("array", "Array")(importer)(jsDocTags)(input),
            // check custom array for legacy (3.7.0)
        ],
    });
