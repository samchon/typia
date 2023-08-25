import ts from "typescript";

import { ExpressionFactory } from "../../factories/ExpressionFactory";

import { IMetadataCommentTag } from "../../schemas/metadata/IMetadataCommentTag";
import { IMetadataTypeTag } from "../../schemas/metadata/IMetadataTypeTag";
import { MetadataArray } from "../../schemas/metadata/MetadataArray";

import { IProject } from "../../transformers/IProject";

import { ICheckEntry } from "../helpers/ICheckEntry";

/**
 * @internal
 */
export const check_array_length =
    (project: IProject) =>
    (array: MetadataArray) =>
    (metaTags: IMetadataCommentTag[]) =>
    (input: ts.Expression): ICheckEntry => {
        const ofTypes: ICheckEntry.ICondition[][] = check_string_type_tags(
            project,
        )(array.tags)(input);
        const ofComment: ICheckEntry.ICondition[] =
            check_array_comment_tags(metaTags)(input);
        const sets: ICheckEntry.ICondition[][] = ofTypes.length
            ? ofComment.length
                ? ofTypes.map((row) => [...row, ...ofComment])
                : ofTypes
            : ofComment.length
            ? [ofComment]
            : [];

        return {
            expected: array.getName(),
            expression: null,
            conditions: sets,
        };
    };

const check_string_type_tags =
    (project: IProject) =>
    (matrix: IMetadataTypeTag[][]) =>
    (input: ts.Expression): ICheckEntry.ICondition[][] =>
        matrix.map((row) =>
            row.map((tag) => ({
                expected: `Array<> & ${tag.name}`,
                expression: ExpressionFactory.transpile(project.context)(
                    tag.validate,
                )(input),
            })),
        );

const check_array_comment_tags =
    (metaTags: IMetadataCommentTag[]) =>
    (input: ts.Expression): ICheckEntry.ICondition[] =>
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
