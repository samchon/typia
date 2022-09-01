import ts from "typescript";

import { IMetadataTag } from "../../metadata/IMetadataTag";

import { IProject } from "../../transformers/IProject";

import { OptionPreditor } from "../helpers/OptionPredicator";

export function check_number(project: IProject, numeric: boolean) {
    return function (input: ts.Expression, tagList: IMetadataTag[]) {
        // TYPEOF
        const conditions: ts.Expression[] = [
            ts.factory.createStrictEquality(
                ts.factory.createStringLiteral("number"),
                ts.factory.createTypeOfExpression(input),
            ),
        ];

        // TAG (RANGE)
        for (const tag of tagList)
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
                    ts.factory.createLessThanEquals(
                        ts.factory.createNumericLiteral(0),
                        input,
                    );
            } else if (tag.kind === "range") {
                if (tag.minimum !== undefined)
                    conditions.push(
                        (tag.minimum.include
                            ? ts.factory.createLessThanEquals
                            : ts.factory.createLessThan)(
                            ts.factory.createNumericLiteral(tag.minimum.value),
                            input,
                        ),
                    );
                if (tag.maximum !== undefined)
                    conditions.push(
                        (tag.maximum.include
                            ? ts.factory.createLessThanEquals
                            : ts.factory.createLessThan)(
                            input,
                            ts.factory.createNumericLiteral(tag.maximum.value),
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

        // NUMERIC VALIDATION
        const finite: boolean =
            tagList.find(
                (tag) =>
                    tag.kind === "range" &&
                    tag.minimum !== undefined &&
                    tag.maximum !== undefined,
            ) !== undefined;
        const valid: boolean =
            finite || tagList.find((tag) => tag.kind === "type") !== undefined;

        if (
            numeric &&
            OptionPreditor.numeric(project.options, "checker") === false
        ) {
            if (finite === false)
                conditions.push(
                    ts.factory.createCallExpression(
                        ts.factory.createIdentifier("Number.isFinite"),
                        undefined,
                        [input],
                    ),
                );
            if (valid === false)
                conditions.push(
                    ts.factory.createLogicalNot(
                        ts.factory.createCallExpression(
                            ts.factory.createIdentifier("Number.isNaN"),
                            undefined,
                            [input],
                        ),
                    ),
                );
        }

        // COMBINATION
        return conditions.length === 1
            ? conditions[0]!
            : conditions.reduce((x, y) => ts.factory.createLogicalAnd(x, y));
    };
}
