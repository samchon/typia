import ts from "typescript";

import { MetadataTagFactory } from "../../factories/MetadataTagFactory";

import { IJsDocTagInfo } from "../../metadata/IJsDocTagInfo";

import { FunctionImporter } from "../helpers/FunctionImporeter";

export const check_custom =
    (type: string) =>
    (importer: FunctionImporter) =>
    (input: ts.Expression, jsDocTags: IJsDocTagInfo[]) =>
        jsDocTags
            .filter(
                (tag) =>
                    tag.name !== "random" &&
                    MetadataTagFactory._PARSER[tag.name] === undefined,
            )
            .map((tag) =>
                ts.factory.createCallExpression(
                    importer.use("is_custom"),
                    undefined,
                    [
                        ts.factory.createStringLiteral(tag.name),
                        ts.factory.createStringLiteral(type),
                        ts.factory.createStringLiteral(
                            tag.text?.[0]?.text ?? "",
                        ),
                        input,
                    ],
                ),
            );
