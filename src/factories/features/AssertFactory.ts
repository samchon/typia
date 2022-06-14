import ts from "typescript";
import { ITypeGuardErrorModulo } from "../../structures/ITypeGuardErrorModulo";
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
        imp: ITypeGuardErrorModulo,
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
                CheckerFactory.generate(true, combine(imp))(collection, meta),
                undefined,
                [ValueFactory.INPUT()],
            ),
        );
    }

    export function combine(
        imp: ITypeGuardErrorModulo,
    ): CheckerFactory.Combiner {
        return (trace, postfix) => {
            const combiner = IsFactory.combine;
            if (trace === false) return combiner;

            const path = postfix ? `path + ${postfix}` : "path";
            const wrapper = (output: ts.Expression) =>
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
                                    StatementFactory.transpile(
                                        `throw new ${imp.name}.TypeGuardError(${path}, input)`,
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
                return (expressions) => {
                    const output = typer(expressions);
                    return wrapper(output);
                };
            };
        };
    }
}
