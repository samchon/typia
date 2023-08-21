import ts from "typescript";

import { ExpressionFactory } from "../../factories/ExpressionFactory";

import { IJsDocTagInfo } from "../../schemas/metadata/IJsDocTagInfo";
import { IMetadataTag } from "../../schemas/metadata/IMetadataTag";

import { FunctionImporter } from "../helpers/FunctionImporeter";
import { ICheckEntry } from "../helpers/ICheckEntry";
import { check_custom } from "./check_custom";

/**
 * @internal
 */
export const check_bigint =
    (importer: FunctionImporter) =>
    (metaTags: IMetadataTag[]) =>
    (jsDocTag: IJsDocTagInfo[]) =>
    (input: ts.Expression): ICheckEntry => {
        const entries: [IMetadataTag, ts.Expression][] = [];
        for (const tag of metaTags) {
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
        }
        return {
            expression: ts.factory.createStrictEquality(
                ts.factory.createStringLiteral("bigint"),
                ts.factory.createTypeOfExpression(input),
            ),
            tags: [
                ...entries.map(([tag, expression]) => ({
                    expected: `bigint (@${tag.kind} ${tag.value})`,
                    expression,
                })),
                ...check_custom("bigint")(importer)(jsDocTag)(input),
            ],
        };
    };
