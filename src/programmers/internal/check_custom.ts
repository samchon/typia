import ts from "typescript";

import { MetadataTagFactory } from "../../factories/MetadataTagFactory";

import { IJsDocTagInfo } from "../../metadata/IJsDocTagInfo";

import { FunctionImporter } from "../helpers/FunctionImporeter";
import { ICheckEntry } from "../helpers/ICheckEntry";

export const check_custom =
    (type: string, alias?: string) =>
    (importer: FunctionImporter) =>
    (jsDocTags: IJsDocTagInfo[]) =>
    (input: ts.Expression): ICheckEntry.ITag[] =>
        jsDocTags
            .filter(
                (tag) =>
                    tag.name !== "random" &&
                    (!tag.text?.length ||
                        (tag.text?.length === 1 &&
                            tag.text?.[0]?.kind === "text")) &&
                    MetadataTagFactory._PARSER[tag.name] === undefined,
            )
            .map((tag) => {
                const text: string | undefined = tag.text?.[0]?.text ?? "";
                return {
                    expected: `${alias ?? type} (@${tag.name}${
                        text.length ? ` ${text}` : ""
                    })`,
                    expression: ts.factory.createCallExpression(
                        importer.use("is_custom"),
                        undefined,
                        [
                            ts.factory.createStringLiteral(tag.name),
                            ts.factory.createStringLiteral(type),
                            ts.factory.createStringLiteral(text),
                            input,
                        ],
                    ),
                };
            });
