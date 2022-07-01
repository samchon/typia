import ts from "typescript";
import { StatementFactory } from "../factories/StatementFactory";
import { ValueFactory } from "../factories/ValueFactory";
import { CheckerProgrammer } from "./CheckerProgrammer";
import { IsProgrammer } from "./IsProgrammer";
import { IProject } from "../transformers/IProject";
import { IdentifierFactory } from "../factories/IdentifierFactory";
import { TypeGuardError } from "../TypeGuardError";

export namespace AssertProgrammer {
    export function generate(
        project: IProject,
        modulo: ts.LeftHandSideExpression,
        type: ts.Type,
    ) {
        return ts.factory.createArrowFunction(
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
                        CheckerProgrammer.generate(project, {
                            functors: "$ao",
                            unioners: "$au",
                            trace: true,
                            combiner: combine(modulo),
                        })(type),
                        undefined,
                        [ValueFactory.INPUT()],
                    ),
                ),
                ts.factory.createReturnStatement(ValueFactory.INPUT()),
            ]),
        );
    }

    export function combine(
        modulo: ts.LeftHandSideExpression,
    ): CheckerProgrammer.IConfig.Combiner {
        return (explore: CheckerProgrammer.IExplore) => {
            const combiner = IsProgrammer.CONFIG().combiner;
            if (explore.tracable === false && explore.from !== "top")
                return combiner(explore);

            const path = explore.postfix ? `path + ${explore.postfix}` : "path";
            const failure = ts.factory.createStrictEquality(
                ValueFactory.INPUT("success"),
                ValueFactory.BOOLEAN(false),
            );

            const wrapper = (
                input: ts.Expression,
                output: ts.Expression,
                expected: string,
            ) =>
                ts.factory.createCallExpression(
                    ts.factory.createArrowFunction(
                        undefined,
                        undefined,
                        [],
                        undefined,
                        undefined,
                        ts.factory.createBlock(
                            [
                                StatementFactory.variable(
                                    ts.NodeFlags.Const,
                                    "success",
                                    output,
                                ),
                                ts.factory.createIfStatement(
                                    explore.source === "top"
                                        ? failure
                                        : ts.factory.createLogicalAnd(
                                              failure,
                                              ts.factory.createStrictEquality(
                                                  ValueFactory.INPUT(
                                                      "exceptionable",
                                                  ),
                                                  ValueFactory.BOOLEAN(true),
                                              ),
                                          ),
                                    throw_type_guard_error(modulo)({
                                        method: "assertType",
                                        path,
                                        expected,
                                        value: input,
                                    }),
                                ),
                                ts.factory.createReturnStatement(
                                    ValueFactory.INPUT("success"),
                                ),
                            ],
                            true,
                        ),
                    ),
                    undefined,
                    undefined,
                );
            return (type) => {
                const typer = combiner(explore)(type);
                return (input, expressions, expected) => {
                    const output = typer(input, expressions, expected);
                    return wrapper(input, output, expected);
                };
            };
        };
    }

    export const throw_type_guard_error =
        (modulo: ts.LeftHandSideExpression) => (props: TypeGuardError.IProps) =>
            ts.factory.createThrowStatement(
                ts.factory.createNewExpression(
                    IdentifierFactory.join(modulo, "TypeGuardError"),
                    [],
                    [
                        ts.factory.createObjectLiteralExpression(
                            [
                                ts.factory.createPropertyAssignment(
                                    "method",
                                    ts.factory.createStringLiteral(
                                        props.method,
                                    ),
                                ),
                                ts.factory.createPropertyAssignment(
                                    "path",
                                    ts.factory.createIdentifier(
                                        props.path || "undefined",
                                    ),
                                ),
                                ts.factory.createPropertyAssignment(
                                    "expected",
                                    ts.factory.createStringLiteral(
                                        props.expected,
                                    ),
                                ),
                                ts.factory.createPropertyAssignment(
                                    "value",
                                    props.value,
                                ),
                            ],
                            true,
                        ),
                    ],
                ),
            );
}
