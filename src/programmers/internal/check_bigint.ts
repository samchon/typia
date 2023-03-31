import ts from "typescript";

import { IJsDocTagInfo } from "../../metadata/IJsDocTagInfo";
import { IMetadataTag } from "../../metadata/IMetadataTag";

import { FunctionImporter } from "../helpers/FunctionImporeter";
import { check_custom } from "./check_custom";

export const check_bigint =
    (importer: FunctionImporter) =>
    (
        input: ts.Expression,
        metaTags: IMetadataTag[],
        jsDocTags: IJsDocTagInfo[],
    ): ts.Expression => {
        const caster = (value: number) =>
            ts.factory.createIdentifier(`${Math.floor(value)}n`);

        // TYPEOF STATEMENT
        const conditions: ts.Expression[] = [
            ts.factory.createStrictEquality(
                ts.factory.createStringLiteral("bigint"),
                ts.factory.createTypeOfExpression(input),
            ),
        ];

        // TAG (RANGE)
        for (const tag of metaTags)
            if (tag.kind === "multipleOf")
                conditions.push(
                    ts.factory.createStrictEquality(
                        caster(0),
                        ts.factory.createModulo(input, caster(tag.value)),
                    ),
                );
            else if (tag.kind === "step") {
                const modulo = () =>
                    ts.factory.createModulo(input, caster(tag.value));
                const minimum = (() => {
                    for (const tag of metaTags)
                        if (tag.kind === "minimum") return tag.value;
                        else if (tag.kind === "exclusiveMinimum")
                            return tag.value;
                    return undefined;
                })();
                conditions.push(
                    ts.factory.createStrictEquality(
                        caster(0),
                        minimum !== undefined
                            ? ts.factory.createSubtract(
                                  modulo(),
                                  caster(minimum),
                              )
                            : modulo(),
                    ),
                );
            } else if (tag.kind === "minimum")
                conditions.push(
                    ts.factory.createLessThanEquals(caster(tag.value), input),
                );
            else if (tag.kind === "maximum")
                conditions.push(
                    ts.factory.createGreaterThanEquals(
                        caster(tag.value),
                        input,
                    ),
                );
            else if (tag.kind === "exclusiveMinimum")
                conditions.push(
                    ts.factory.createLessThan(caster(tag.value), input),
                );
            else if (tag.kind === "exclusiveMaximum")
                conditions.push(
                    ts.factory.createGreaterThan(caster(tag.value), input),
                );

        // CUSTOM TAGS
        conditions.push(...check_custom("bigint")(importer)(input, jsDocTags));

        // COMBINATION
        return conditions.length === 1
            ? conditions[0]!
            : conditions.reduce((x, y) => ts.factory.createLogicalAnd(x, y));
    };
