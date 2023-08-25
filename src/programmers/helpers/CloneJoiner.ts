import ts from "typescript";

import { IdentifierFactory } from "../../factories/IdentifierFactory";
import { StatementFactory } from "../../factories/StatementFactory";
import { TypeFactory } from "../../factories/TypeFactory";

import { Escaper } from "../../utils/Escaper";

import { metadata_to_pattern } from "../internal/metadata_to_pattern";
import { IExpressionEntry } from "./IExpressionEntry";

export namespace CloneJoiner {
    export const object = (
        input: ts.Expression,
        entries: IExpressionEntry<ts.Expression>[],
    ): ts.ConciseBody => {
        if (entries.length === 0) return ts.factory.createIdentifier("{}");

        const regular = entries.filter((e) => e.key.isSoleLiteral());
        const dynamic = entries.filter((e) => !e.key.isSoleLiteral());
        const literal = ts.factory.createObjectLiteralExpression(
            regular.map((entry) => {
                const str: string = entry.key.getSoleLiteral()!;
                return ts.factory.createPropertyAssignment(
                    Escaper.variable(str)
                        ? str
                        : ts.factory.createStringLiteral(str),
                    entry.expression,
                );
            }),
            true,
        );
        if (dynamic.length === 0) return literal;

        const key = ts.factory.createIdentifier("key");
        const output = ts.factory.createIdentifier("output");

        const statements: ts.Statement[] = [];
        if (regular.length !== 0)
            statements.push(
                ts.factory.createIfStatement(
                    ts.factory.createCallExpression(
                        IdentifierFactory.access(
                            ts.factory.createArrayLiteralExpression(
                                regular.map((r) =>
                                    ts.factory.createStringLiteral(
                                        r.key.getSoleLiteral()!,
                                    ),
                                ),
                            ),
                        )("some"),
                        undefined,
                        [
                            ts.factory.createArrowFunction(
                                undefined,
                                undefined,
                                [IdentifierFactory.parameter("regular")],
                                undefined,
                                undefined,
                                ts.factory.createStrictEquality(
                                    ts.factory.createIdentifier("regular"),
                                    ts.factory.createIdentifier("key"),
                                ),
                            ),
                        ],
                    ),
                    ts.factory.createContinueStatement(),
                ),
            );
        statements.push(
            ...dynamic.map((entry) =>
                ts.factory.createIfStatement(
                    ts.factory.createCallExpression(
                        ts.factory.createIdentifier(
                            `RegExp(/${metadata_to_pattern(true)(
                                entry.key,
                            )}/).test`,
                        ),
                        undefined,
                        [key],
                    ),
                    ts.factory.createBlock([
                        ts.factory.createExpressionStatement(
                            ts.factory.createBinaryExpression(
                                ts.factory.createElementAccessExpression(
                                    output,
                                    key,
                                ),
                                ts.factory.createToken(
                                    ts.SyntaxKind.EqualsToken,
                                ),
                                entry.expression,
                            ),
                        ),
                        ts.factory.createContinueStatement(),
                    ]),
                ),
            ),
        );

        return ts.factory.createBlock([
            StatementFactory.constant(
                "output",
                ts.factory.createAsExpression(
                    literal,
                    TypeFactory.keyword("any"),
                ),
            ),
            ts.factory.createForOfStatement(
                undefined,
                StatementFactory.entry("key")("value"),
                ts.factory.createCallExpression(
                    ts.factory.createIdentifier("Object.entries"),
                    undefined,
                    [input],
                ),
                ts.factory.createBlock(statements),
            ),
            ts.factory.createReturnStatement(output),
        ]);
    };

    export const tuple = (
        children: ts.Expression[],
        rest: ts.Expression | null,
    ): ts.Expression => {
        return ts.factory.createAsExpression(
            ts.factory.createArrayLiteralExpression(
                rest === null
                    ? children
                    : [...children, ts.factory.createSpreadElement(rest)],
                true,
            ),
            TypeFactory.keyword("any"),
        );
    };

    export const array = (input: ts.Expression, arrow: ts.Expression) =>
        ts.factory.createCallExpression(
            ts.factory.createPropertyAccessExpression(input, "map"),
            undefined,
            [arrow],
        );
}
