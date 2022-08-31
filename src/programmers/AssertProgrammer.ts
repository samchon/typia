import ts from "typescript";
import { ValueFactory } from "../factories/ValueFactory";
import { CheckerProgrammer } from "./CheckerProgrammer";
import { IsProgrammer } from "./IsProgrammer";
import { IProject } from "../transformers/IProject";
import { FunctionImporter } from "./helpers/FunctionImporeter";

export namespace AssertProgrammer {
    export function generate(
        project: IProject,
        modulo: ts.LeftHandSideExpression,
    ) {
        const importer = new FunctionImporter();
        return (type: ts.Type) =>
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
                                    combiner: combine(importer),
                                    joiner: CheckerProgrammer.DEFAULT_JOINER(),
                                },
                                modulo,
                                importer,
                            )(type),
                            undefined,
                            [ValueFactory.INPUT()],
                        ),
                    ),
                    ts.factory.createReturnStatement(ValueFactory.INPUT()),
                ]),
            );
    }
}

function combine(
    importer: FunctionImporter,
): CheckerProgrammer.IConfig.Combiner {
    return (explore: CheckerProgrammer.IExplore) => {
        const combiner = IsProgrammer.CONFIG().combiner;
        if (explore.tracable === false && explore.from !== "top")
            return combiner(explore);

        const path: string = explore.postfix
            ? `path + ${explore.postfix}`
            : "path";
        return (logic) => (input, expressions, expected) =>
            ts.factory.createCallExpression(
                importer.use("predicate"),
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
