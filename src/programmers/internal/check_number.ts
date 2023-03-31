import ts from "typescript";

import { IMetadataTag } from "../../metadata/IMetadataTag";

import { IProject } from "../../transformers/IProject";

import { FunctionImporter } from "../helpers/FunctionImporeter";
import { OptionPredicator } from "../helpers/OptionPredicator";
import { check_custom } from "./check_custom";

/**
 * @internal
 */
export const check_number =
    ({ options }: IProject, numeric: boolean) =>
    (importer: FunctionImporter) =>
    (
        input: ts.Expression,
        metaTags: IMetadataTag[],
        jsDocTags: ts.JSDocTagInfo[],
    ) => {
        // TYPEOF STATEMENT
        const conditions: ts.Expression[] = [
            ts.factory.createStrictEquality(
                ts.factory.createStringLiteral("number"),
                ts.factory.createTypeOfExpression(input),
            ),
        ];

        // CHECK FINITE AND NAN
        const finite: boolean =
            (!!metaTags.find(
                (tag) =>
                    tag.kind === "minimum" || tag.kind === "exclusiveMinimum",
            ) &&
                !!metaTags.find(
                    (tag) =>
                        tag.kind === "maximum" ||
                        tag.kind === "exclusiveMaximum",
                )) ||
            !!metaTags.find(
                (tag) => tag.kind === "step" || tag.kind === "multipleOf",
            );

        if (numeric === true && finite === false)
            if (OptionPredicator.finite(options))
                conditions.push(
                    ts.factory.createCallExpression(
                        ts.factory.createIdentifier("Number.isFinite"),
                        undefined,
                        [input],
                    ),
                );
            else if (OptionPredicator.numeric(options))
                conditions.push(
                    ts.factory.createLogicalNot(
                        ts.factory.createCallExpression(
                            ts.factory.createIdentifier("Number.isNaN"),
                            undefined,
                            [input],
                        ),
                    ),
                );

        // TAG (RANGE)
        for (const tag of metaTags)
            if (tag.kind === "type") {
                conditions.push(
                    ts.factory.createStrictEquality(
                        ts.factory.createCallExpression(
                            ts.factory.createIdentifier("parseInt"),
                            undefined,
                            [input],
                        ),
                        input,
                    ),
                );
                if (tag.value === "uint")
                    conditions.push(
                        ts.factory.createLessThanEquals(
                            ts.factory.createNumericLiteral(0),
                            input,
                        ),
                    );
            } else if (tag.kind === "multipleOf")
                conditions.push(
                    ts.factory.createStrictEquality(
                        ts.factory.createNumericLiteral(0),
                        ts.factory.createModulo(
                            input,
                            ts.factory.createNumericLiteral(tag.value),
                        ),
                    ),
                );
            else if (tag.kind === "step") {
                const modulo = () =>
                    ts.factory.createModulo(
                        input,
                        ts.factory.createNumericLiteral(tag.value),
                    );
                const minimum = (() => {
                    for (const tag of metaTags)
                        if (tag.kind === "minimum") return tag.value;
                        else if (tag.kind === "exclusiveMinimum")
                            return tag.value;
                    return undefined;
                })();
                conditions.push(
                    ts.factory.createStrictEquality(
                        ts.factory.createNumericLiteral(0),
                        minimum !== undefined
                            ? ts.factory.createSubtract(
                                  modulo(),
                                  ts.factory.createNumericLiteral(minimum),
                              )
                            : modulo(),
                    ),
                );
            } else if (tag.kind === "minimum")
                conditions.push(
                    ts.factory.createLessThanEquals(
                        ts.factory.createNumericLiteral(tag.value),
                        input,
                    ),
                );
            else if (tag.kind === "maximum")
                conditions.push(
                    ts.factory.createGreaterThanEquals(
                        ts.factory.createNumericLiteral(tag.value),
                        input,
                    ),
                );
            else if (tag.kind === "exclusiveMinimum")
                conditions.push(
                    ts.factory.createLessThan(
                        ts.factory.createNumericLiteral(tag.value),
                        input,
                    ),
                );
            else if (tag.kind === "exclusiveMaximum")
                conditions.push(
                    ts.factory.createGreaterThan(
                        ts.factory.createNumericLiteral(tag.value),
                        input,
                    ),
                );

        // CUSTOM TAGS
        conditions.push(...check_custom("number")(importer)(input, jsDocTags));

        // COMBINATION
        return conditions.length === 1
            ? conditions[0]!
            : conditions.reduce((x, y) => ts.factory.createLogicalAnd(x, y));
    };
