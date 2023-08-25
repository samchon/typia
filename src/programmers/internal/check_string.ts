import ts from "typescript";

import { ExpressionFactory } from "../../factories/ExpressionFactory";
import { IdentifierFactory } from "../../factories/IdentifierFactory";

import { IMetadataCommentTag } from "../../schemas/metadata/IMetadataCommentTag";
import { MetadataAtomic } from "../../schemas/metadata/MetadataAtomic";

import { IProject } from "../../transformers/IProject";

import { FunctionImporter } from "../helpers/FunctionImporeter";
import { ICheckEntry } from "../helpers/ICheckEntry";

/**
 * @internal
 */
export const check_string =
    (project: IProject) =>
    (importer: FunctionImporter) =>
    (atomic: MetadataAtomic) =>
    (metaTags: IMetadataCommentTag[]) =>
    (input: ts.Expression): ICheckEntry => {
        const ofTypes: ICheckEntry.ICondition[][] =
            check_string_type_tags(project)(atomic)(input);
        const ofComment: ICheckEntry.ICondition[] =
            check_string_comment_tags(importer)(metaTags)(input);
        const sets: ICheckEntry.ICondition[][] = ofTypes.length
            ? ofComment.length
                ? ofTypes.map((row) => [...row, ...ofComment])
                : ofTypes
            : ofComment.length
            ? [ofComment]
            : [];

        return {
            expected: atomic.getName(),
            expression: ts.factory.createStrictEquality(
                ts.factory.createStringLiteral("string"),
                ts.factory.createTypeOfExpression(input),
            ),
            conditions: sets,
        };
    };

/**
 * @internal
 */
const check_string_type_tags =
    (project: IProject) =>
    (atomic: MetadataAtomic) =>
    (input: ts.Expression): ICheckEntry.ICondition[][] =>
        atomic.tags.map((row) =>
            row.map((tag) => ({
                expected: `string & ${tag.name}`,
                expression: ExpressionFactory.transpile(project.context)(
                    tag.validate,
                )(input),
            })),
        );

/**
 * @internal
 */
const check_string_comment_tags =
    (importer: FunctionImporter) =>
    (tagList: IMetadataCommentTag[]) =>
    (input: ts.Expression): ICheckEntry.ICondition[] => {
        const conditions: [IMetadataCommentTag, ts.Expression][] = [];
        for (const tag of tagList)
            if (tag.kind === "format")
                conditions.push([
                    tag,
                    ts.factory.createCallExpression(
                        importer.use(`is_${tag.value}`),
                        undefined,
                        [input],
                    ),
                ]);
            else if (tag.kind === "pattern")
                conditions.push([
                    tag,
                    ts.factory.createCallExpression(
                        ts.factory.createIdentifier(
                            `RegExp(/${tag.value}/).test`,
                        ),
                        undefined,
                        [input],
                    ),
                ]);
            else if (tag.kind === "length")
                conditions.push([
                    tag,
                    ts.factory.createStrictEquality(
                        ts.factory.createNumericLiteral(tag.value),
                        IdentifierFactory.access(input)("length"),
                    ),
                ]);
            else if (tag.kind === "minLength")
                conditions.push([
                    tag,
                    ts.factory.createLessThanEquals(
                        ts.factory.createNumericLiteral(tag.value),
                        IdentifierFactory.access(input)("length"),
                    ),
                ]);
            else if (tag.kind === "maxLength")
                conditions.push([
                    tag,
                    ts.factory.createGreaterThanEquals(
                        ts.factory.createNumericLiteral(tag.value),
                        IdentifierFactory.access(input)("length"),
                    ),
                ]);
        return conditions.map(([tag, expression]) => ({
            expected: `string (@${tag.kind} ${tag.value})`,
            expression,
        }));
    };
