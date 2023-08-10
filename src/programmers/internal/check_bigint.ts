import ts from "typescript";

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
            if (tag.kind === "multipleOf")
                entries.push([
                    tag,
                    ts.factory.createStrictEquality(
                        cast(0),
                        ts.factory.createModulo(input, cast(tag.value)),
                    ),
                ]);
            else if (tag.kind === "step") {
                const modulo = ts.factory.createModulo(input, cast(tag.value));
                const minimum =
                    (metaTags.find(
                        (tag) =>
                            tag.kind === "minimum" ||
                            tag.kind === "exclusiveMinimum",
                    )?.value as number | undefined) ?? undefined;
                entries.push([
                    tag,
                    ts.factory.createStrictEquality(
                        cast(0),
                        minimum !== undefined
                            ? ts.factory.createSubtract(modulo, cast(minimum))
                            : modulo,
                    ),
                ]);
            } else if (tag.kind === "minimum")
                entries.push([
                    tag,
                    ts.factory.createLessThanEquals(cast(tag.value), input),
                ]);
            else if (tag.kind === "maximum")
                entries.push([
                    tag,
                    ts.factory.createGreaterThanEquals(cast(tag.value), input),
                ]);
            else if (tag.kind === "exclusiveMinimum")
                entries.push([
                    tag,
                    ts.factory.createLessThan(cast(tag.value), input),
                ]);
            else if (tag.kind === "exclusiveMaximum")
                entries.push([
                    tag,
                    ts.factory.createGreaterThan(cast(tag.value), input),
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

const cast = (value: number) =>
    ts.factory.createIdentifier(`${Math.floor(value)}n`);
