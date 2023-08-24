import ts from "typescript";

import { IMetadataCommentTag } from "../../schemas/metadata/IMetadataCommentTag";

/**
 * @internal
 */
export const check_array_length =
    (metaTags: IMetadataCommentTag[]) => (input: ts.Expression) =>
        metaTags
            .map((tag) => ({
                tag,
                expression:
                    tag.kind === "items"
                        ? ts.factory.createStrictEquality(
                              ts.factory.createNumericLiteral(tag.value),
                              input,
                          )
                        : tag.kind === "minItems"
                        ? ts.factory.createLessThanEquals(
                              ts.factory.createNumericLiteral(tag.value),
                              input,
                          )
                        : tag.kind === "maxItems"
                        ? ts.factory.createGreaterThanEquals(
                              ts.factory.createNumericLiteral(tag.value),
                              input,
                          )
                        : null!,
            }))
            .filter((tuple) => tuple.expression !== null)
            .map(({ tag, expression }) => ({
                expected: `Array.length (@${tag.kind} ${tag.value})`,
                expression,
            }));
