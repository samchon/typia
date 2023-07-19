import ts from "typescript";

import { IJsDocTagInfo } from "../../schemas/metadata/IJsDocTagInfo";

import { FunctionImporter } from "../helpers/FunctionImporeter";
import { ICheckEntry } from "../helpers/ICheckEntry";
import { get_comment_tags } from "./get_comment_tags";

/**
 * @internal
 */
export const check_custom =
    (type: string, alias?: string) =>
    (importer: FunctionImporter) =>
    (jsDocTags: IJsDocTagInfo[]) =>
    (input: ts.Expression): ICheckEntry.ITag[] =>
        get_comment_tags(true)(jsDocTags).map((tag) => ({
            expected: `${alias ?? type} (@${tag.name}${
                tag.value?.length ? ` ${tag.value}` : ""
            })`,
            expression: ts.factory.createCallExpression(
                importer.use("is_custom"),
                undefined,
                [
                    ts.factory.createStringLiteral(tag.name),
                    ts.factory.createStringLiteral(type),
                    ts.factory.createStringLiteral(tag.value ?? ""),
                    input,
                ],
            ),
        }));
