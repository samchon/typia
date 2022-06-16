import ts from "typescript";
import { IModule } from "../../structures/IModule";
import { IMetadata } from "../../structures/IMetadata";
import { MetadataCollection } from "../MetadataCollection";
import { StatementFactory } from "../programmatics/StatementFactory";
import { ValueFactory } from "../ValueFactory";
import { CheckerFactory } from "./CheckerFactory";
import { IsFactory } from "./IsFactory";

export namespace AssertFactory {
    export function generate(
        collection: MetadataCollection,
        meta: IMetadata,
        modulo: IModule,
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
            ts.factory.createCallExpression(
                CheckerFactory.generate({
                    combiner: combine(modulo),
                    functors: {
                        name: "assert",
                    },
                    trace: true,
                })(collection, meta),
                undefined,
                [ValueFactory.INPUT()],
            ),
        );
    }

    export function combine(modulo: IModule): CheckerFactory.IConfig.Combiner {
        return (explore: CheckerFactory.IExplore) => {
            const combiner = IsFactory.CONFIG.combiner(explore);
            if (explore.tracable === false) return combiner;

            const path = explore.postfix ? `path + ${explore.postfix}` : "path";
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
                                StatementFactory.constant("success", output),
                                ts.factory.createIfStatement(
                                    ts.factory.createLogicalAnd(
                                        ts.factory.createStrictEquality(
                                            ValueFactory.INPUT("success"),
                                            ValueFactory.BOOLEAN(false),
                                        ),
                                        ts.factory.createStrictEquality(
                                            ValueFactory.INPUT("exceptionable"),
                                            ValueFactory.BOOLEAN(true),
                                        ),
                                    ),
                                    ts.factory.createThrowStatement(
                                        ts.factory.createNewExpression(
                                            ts.factory.createIdentifier(
                                                `${modulo.error.name}.TypeGuardError`,
                                            ),
                                            undefined,
                                            [
                                                ts.factory.createStringLiteral(
                                                    "assert",
                                                ),
                                                ts.factory.createStringLiteral(
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
