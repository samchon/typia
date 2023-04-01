import ts from "typescript";

import { IdentifierFactory } from "../../factories/IdentifierFactory";

import { IMetadataTag } from "../../metadata/IMetadataTag";

import { ICheckEntry } from "../helpers/ICheckEntry";

/**
 * @internal
 */
export const check_array_length =
    (tagList: IMetadataTag[]) =>
    (input: ts.Expression): ICheckEntry.ITag[] =>
        tagList
            .map((tag) => ({
                tag,
                expression:
                    tag.kind === "items"
                        ? ts.factory.createStrictEquality(
                              ts.factory.createNumericLiteral(tag.value),
                              IdentifierFactory.join(input, "length"),
                          )
                        : tag.kind === "minItems"
                        ? ts.factory.createLessThanEquals(
                              ts.factory.createNumericLiteral(tag.value),
                              IdentifierFactory.join(input, "length"),
                          )
                        : tag.kind === "maxItems"
                        ? ts.factory.createGreaterThanEquals(
                              ts.factory.createNumericLiteral(tag.value),
                              IdentifierFactory.join(input, "length"),
                          )
                        : null!,
            }))
            .filter((tuple) => tuple.expression !== null)
            .map(({ tag, expression }) => ({
                expected: `Array.length (@${tag.kind} ${tag.value})`,
                expression,
            }));
