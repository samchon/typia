import ts from "typescript";

import { ExpressionFactory } from "../../factories/ExpressionFactory";

import { IMetadataCommentTag } from "../../schemas/metadata/IMetadataCommentTag";
import { MetadataAtomic } from "../../schemas/metadata/MetadataAtomic";

import { IProject } from "../../transformers/IProject";

import { ICheckEntry } from "../helpers/ICheckEntry";

/**
 * @internal
 */
export const check_bigint =
    (project: IProject) =>
    (atomic: MetadataAtomic) =>
    (metaTags: IMetadataCommentTag[]) =>
    (input: ts.Expression): ICheckEntry => {
        const ofTypes: ICheckEntry.ICondition[][] =
            check_bigint_type_tags(project)(atomic)(input);
        const ofComment: ICheckEntry.ICondition[] =
            check_bigint_comment_tags(metaTags)(input);
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
                ts.factory.createStringLiteral("bigint"),
                ts.factory.createTypeOfExpression(input),
            ),
            conditions: sets,
        };
    };

/**
 * @internal
 */
const check_bigint_type_tags =
    (project: IProject) =>
    (atomic: MetadataAtomic) =>
    (input: ts.Expression): ICheckEntry.ICondition[][] =>
        atomic.tags.map((row) =>
            row.map((tag) => ({
                expected: `bigint & ${tag.name}`,
                expression: ExpressionFactory.transpile(project.context)(
                    tag.validate,
                )(input),
            })),
        );

const check_bigint_comment_tags =
    (metaTags: IMetadataCommentTag[]) =>
    (input: ts.Expression): ICheckEntry.ICondition[] => {
        const entries: [IMetadataCommentTag, ts.Expression][] = [];
        for (const tag of metaTags)
            if (tag.kind === "type" && tag.value === "uint64")
                entries.push([
                    tag,
                    ts.factory.createLessThanEquals(
                        ExpressionFactory.bigint(0),
                        input,
                    ),
                ]);
            else if (tag.kind === "multipleOf")
                entries.push([
                    tag,
                    ts.factory.createStrictEquality(
                        ExpressionFactory.bigint(0),
                        ts.factory.createModulo(
                            input,
                            ExpressionFactory.bigint(tag.value),
                        ),
                    ),
                ]);
            else if (tag.kind === "step") {
                const modulo = ts.factory.createModulo(
                    input,
                    ExpressionFactory.bigint(tag.value),
                );
                const minimum =
                    (metaTags.find(
                        (tag) =>
                            tag.kind === "minimum" ||
                            tag.kind === "exclusiveMinimum",
                    )?.value as number | undefined) ?? undefined;
                entries.push([
                    tag,
                    ts.factory.createStrictEquality(
                        ExpressionFactory.bigint(0),
                        minimum !== undefined
                            ? ts.factory.createSubtract(
                                  modulo,
                                  ExpressionFactory.bigint(minimum),
                              )
                            : modulo,
                    ),
                ]);
            } else if (tag.kind === "minimum")
                entries.push([
                    tag,
                    ts.factory.createLessThanEquals(
                        ExpressionFactory.bigint(tag.value),
                        input,
                    ),
                ]);
            else if (tag.kind === "maximum")
                entries.push([
                    tag,
                    ts.factory.createGreaterThanEquals(
                        ExpressionFactory.bigint(tag.value),
                        input,
                    ),
                ]);
            else if (tag.kind === "exclusiveMinimum")
                entries.push([
                    tag,
                    ts.factory.createLessThan(
                        ExpressionFactory.bigint(tag.value),
                        input,
                    ),
                ]);
            else if (tag.kind === "exclusiveMaximum")
                entries.push([
                    tag,
                    ts.factory.createGreaterThan(
                        ExpressionFactory.bigint(tag.value),
                        input,
                    ),
                ]);

        return entries.map(([tag, expression]) => ({
            expected: `bigint (@${tag.kind} ${tag.value})`,
            expression,
        }));
    };
