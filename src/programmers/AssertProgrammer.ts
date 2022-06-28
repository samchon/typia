import ts from "typescript";
import { StatementFactory } from "../factories/StatementFactory";
import { ValueFactory } from "../factories/ValueFactory";
import { CheckerProgrammer } from "./CheckerProgrammer";
import { IsProgrammer } from "./IsProgrammer";
import { IProject } from "../structures/IProject";
import { IdentifierFactory } from "../factories/IdentifierFactory";

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
                        CheckerProgrammer.generate({
                            combiner: combine(modulo),
                            functors: "assertType",
                            trace: true,
                        })(project, type),
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
            const combiner = IsProgrammer.CONFIG.combiner(explore);
            if (explore.tracable === false && explore.from !== "top")
                return combiner;

            const path = explore.postfix ? `path + ${explore.postfix}` : "path";
            const failure = ts.factory.createStrictEquality(
                ValueFactory.INPUT("success"),
                ValueFactory.BOOLEAN(false),
            );

            const wrapper = (input: ts.Expression, output: ts.Expression) =>
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
                                    ts.factory.createThrowStatement(
                                        ts.factory.createNewExpression(
                                            IdentifierFactory.join(
                                                modulo,
                                                "TypeGuardError",
                                            ),
                                            undefined,
                                            [
                                                ts.factory.createStringLiteral(
                                                    "assertType",
                                                ),
                                                ts.factory.createIdentifier(
                                                    path,
                                                ),
                                                input,
                                            ],
                                        ),
                                    ),
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
                const typer = combiner(type);
                return (input, expressions) => {
                    const output = typer(input, expressions);
                    return wrapper(input, output);
                };
            };
        };
    }
}
