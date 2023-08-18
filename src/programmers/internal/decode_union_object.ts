import ts from "typescript";

import { MetadataObject } from "../../schemas/metadata/MetadataObject";

import { FeatureProgrammer } from "../FeatureProgrammer";

/**
 * @internal
 */
export const decode_union_object =
    (
        checker: (
            input: ts.Expression,
            obj: MetadataObject,
            explore: FeatureProgrammer.IExplore,
        ) => ts.Expression,
    ) =>
    (
        decoder: (
            input: ts.Expression,
            obj: MetadataObject,
            explore: FeatureProgrammer.IExplore,
        ) => ts.Expression,
    ) =>
    (success: (exp: ts.Expression) => ts.Expression) =>
    (escaper: (value: ts.Expression, expected: string) => ts.Statement) =>
    (
        input: ts.Expression,
        targets: MetadataObject[],
        explore: FeatureProgrammer.IExplore,
    ): ts.CallExpression =>
        ts.factory.createCallExpression(
            ts.factory.createArrowFunction(
                undefined,
                undefined,
                [],
                undefined,
                undefined,
                iterate(escaper)(
                    input,
                    targets.map((obj) => ({
                        type: "object",
                        is: () => success(checker(input, obj, explore)),
                        value: () => decoder(input, obj, explore),
                    })),
                    `(${targets.map((t) => t.name).join(" | ")})`,
                ),
            ),
            undefined,
            undefined,
        );

const iterate =
    (escaper: (value: ts.Expression, expected: string) => ts.Statement) =>
    (input: ts.Expression, unions: IUnion[], expected: string) =>
        ts.factory.createBlock(
            [
                unions
                    .map((u, i) =>
                        ts.factory.createIfStatement(
                            u.is(),
                            ts.factory.createReturnStatement(u.value()),
                            i === unions.length - 1
                                ? escaper(input, expected)
                                : undefined,
                        ),
                    )
                    .reverse()
                    .reduce((a, b) =>
                        ts.factory.createIfStatement(
                            b.expression,
                            b.thenStatement,
                            a,
                        ),
                    ),
            ],
            true,
        );

interface IUnion {
    type: string;
    is: () => ts.Expression;
    value: () => ts.Expression;
}
