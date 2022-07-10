import ts from "typescript";
import { IdentifierFactory } from "../factories/IdentifierFactory";
import { StatementFactory } from "../factories/StatementFactory";
import { ValueFactory } from "../factories/ValueFactory";
import { IProject } from "../transformers/IProject";
import { CheckerProgrammer } from "./CheckerProgrammer";
import { IsProgrammer } from "./IsProgrammer";

export namespace ValidateProgrammer {
    export function CONFIG(): CheckerProgrammer.IConfig {
        return {
            functors: "$vo",
            unioners: "$vu",
            trace: true,
            combiner: () => (type: "and" | "or") => {
                const initial: ts.TrueLiteral | ts.FalseLiteral =
                    type === "and"
                        ? ts.factory.createTrue()
                        : ts.factory.createFalse();
                const binder =
                    type === "and"
                        ? ts.factory.createLogicalAnd
                        : ts.factory.createLogicalOr;
                return (_input: ts.Expression, expressions: ts.Expression[]) =>
                    expressions.length
                        ? expressions.reduce((x, y) => binder(x, y))
                        : initial;
            },
        };
    }

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
                                    functors: "$vo",
                                    unioners: "$vu",
                                    trace: true,
                                    combiner: combine(),
                                },
                                () => [
                                    StatementFactory.variable(
                                        ts.NodeFlags.Const,
                                        "$out",
                                        create_output(),
                                    ),
                                    StatementFactory.variable(
                                        ts.NodeFlags.Const,
                                        "$pred",
                                        ts.factory.createCallExpression(
                                            IdentifierFactory.join(
                                                modulo,
                                                "predicate",
                                            ),
                                            [],
                                            [
                                                ts.factory.createIdentifier(
                                                    "$out",
                                                ),
                                            ],
                                        ),
                                    ),
                                ],
                            )(type),
                            undefined,
                            [ValueFactory.INPUT()],
                        ),
                    ),
                ]),
            );
}

function combine(): CheckerProgrammer.IConfig.Combiner {
    return (explore: CheckerProgrammer.IExplore) => {
        const combiner = IsProgrammer.CONFIG().combiner;
        if (explore.tracable === false && explore.from !== "top")
            return combiner(explore);

        const path = explore.postfix ? `path + ${explore.postfix}` : "path";
        return (logic) => (input, expressions, expected) =>
            ts.factory.createCallExpression(
                ts.factory.createIdentifier("$pred"),
                [],
                [
                    combiner(explore)(logic)(input, expressions, expected),
                    explore.source === "top"
                        ? ts.factory.createTrue()
                        : ts.factory.createIdentifier("exceptionable"),
                    create_report_function(path, expected, input),
                ],
            );
    };
}

function create_output() {
    return ts.factory.createObjectLiteralExpression(
        [
            ts.factory.createPropertyAssignment(
                "success",
                ts.factory.createTrue(),
            ),
            ts.factory.createPropertyAssignment(
                "errors",
                ts.factory.createArrayLiteralExpression([], true),
            ),
        ],
        true,
    );
}

function create_report_function(
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
