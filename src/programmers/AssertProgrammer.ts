import ts from "typescript";
import { StatementFactory } from "../factories/StatementFactory";
import { ValueFactory } from "../factories/ValueFactory";
import { CheckerProgrammer } from "./CheckerProgrammer";
import { IsProgrammer } from "./IsProgrammer";
import { IProject } from "../transformers/IProject";
import { IdentifierFactory } from "../factories/IdentifierFactory";

export namespace AssertProgrammer {
    export const generate =
        (project: IProject, modulo: ts.LeftHandSideExpression) =>
        (type: ts.Type) =>
            ts.factory.createArrowFunction(
                undefined,
                undefined,
                [
                    ts.factory.createParameterDeclaration(
                        undefined,
                        undefined,
                        undefined,
                        ValueFactory.INPUT(),
                    ),
                ],
                undefined,
                undefined,
                ts.factory.createBlock([
                    ts.factory.createExpressionStatement(
                        ts.factory.createCallExpression(
                            CheckerProgrammer.generate(
                                project,
                                {
                                    functors: "$ao",
                                    unioners: "$au",
                                    trace: true,
                                    combiner: combine(),
                                    joiner: CheckerProgrammer.DEFAULT_JOINER(),
                                },
                                () => [
                                    StatementFactory.variable(
                                        ts.NodeFlags.Const,
                                        "$pred",
                                        IdentifierFactory.join(
                                            modulo,
                                            "predicate",
                                        ),
                                    ),
                                ],
                            )(type),
                            undefined,
                            [ValueFactory.INPUT()],
                        ),
                    ),
                    ts.factory.createReturnStatement(ValueFactory.INPUT()),
                ]),
            );
}

function combine(): CheckerProgrammer.IConfig.Combiner {
    return (explore: CheckerProgrammer.IExplore) => {
        const combiner = IsProgrammer.CONFIG().combiner;
        if (explore.tracable === false && explore.from !== "top")
            return combiner(explore);

        const path: string = explore.postfix
            ? `path + ${explore.postfix}`
            : "path";
        return (logic) => (input, expressions, expected) =>
            ts.factory.createCallExpression(
                ts.factory.createIdentifier("$pred"),
                [],
                [
                    combiner(explore)(logic)(input, expressions, expected),
                    explore.source === "top"
                        ? ts.factory.createTrue()
                        : ts.factory.createIdentifier("exceptionable"),
                    create_throw_function(path, expected, input),
                ],
            );
    };
}

function create_throw_function(
    path: string,
    expected: string,
    value: ts.Expression,
): ts.ArrowFunction {
    return ts.factory.createArrowFunction(
        undefined,
        undefined,
        [],
        undefined,
        undefined,
        ts.factory.createObjectLiteralExpression(
            [
                ts.factory.createPropertyAssignment(
                    "path",
                    ts.factory.createIdentifier(path),
                ),
                ts.factory.createPropertyAssignment(
                    "expected",
                    ts.factory.createStringLiteral(expected),
                ),
                ts.factory.createPropertyAssignment("value", value),
            ],
            true,
        ),
    );
}
