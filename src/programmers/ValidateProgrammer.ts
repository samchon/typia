import ts from "typescript";

import { IdentifierFactory } from "../factories/IdentifierFactory";
import { StatementFactory } from "../factories/StatementFactory";
import { ValueFactory } from "../factories/ValueFactory";

import { IProject } from "../transformers/IProject";

import { CheckerProgrammer } from "./CheckerProgrammer";
import { IsProgrammer } from "./IsProgrammer";
import { FunctionImporter } from "./helpers/FunctionImporeter";

export namespace ValidateProgrammer {
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
                    StatementFactory.variable(
                        ts.NodeFlags.Const,
                        "$out",
                        create_output(),
                    ),
                    StatementFactory.variable(
                        ts.NodeFlags.Const,
                        "$pred",
                        ts.factory.createCallExpression(
                            IdentifierFactory.join(modulo, "predicate"),
                            [],
                            [ts.factory.createIdentifier("$out")],
                        ),
                    ),
                    ts.factory.createExpressionStatement(
                        ts.factory.createCallExpression(
                            CheckerProgrammer.generate(
                                project,
                                {
                                    functors: "$vo",
                                    unioners: "$vu",
                                    trace: true,
                                    combiner: combine(),
                                    joiner: join(),
                                },
                                modulo,
                                importer,
                            )(type),
                            undefined,
                            [ValueFactory.INPUT()],
                        ),
                    ),
                    ts.factory.createReturnStatement(
                        ts.factory.createIdentifier("$out"),
                    ),
                ]),
            );
    }
}

const combine: () => CheckerProgrammer.IConfig.Combiner = () => (explore) => {
    const combiner = IsProgrammer.CONFIG().combiner;
    if (explore.tracable === false && explore.from !== "top")
        return combiner(explore);

    const path: string = explore.postfix ? `path + ${explore.postfix}` : "path";
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

const join: () => CheckerProgrammer.IConfig.IJoiner = () => ({
    object: (entries) =>
        create_array_every(
            ts.factory.createArrayLiteralExpression(
                entries.map((entry) => entry.expression),
                true,
            ),
        ),
    array: (input, arrow) =>
        create_array_every(
            ts.factory.createCallExpression(
                IdentifierFactory.join(input, "map"),
                undefined,
                [arrow],
            ),
        ),
    tuple: (binaries) =>
        create_array_every(
            ts.factory.createArrayLiteralExpression(binaries, true),
        ),
});

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

function create_array_every(array: ts.Expression): ts.Expression {
    return ts.factory.createCallExpression(
        IdentifierFactory.join(array, "every"),
        undefined,
        [
            ts.factory.createArrowFunction(
                undefined,
                undefined,
                [
                    ts.factory.createParameterDeclaration(
                        undefined,
                        undefined,
                        undefined,
                        "flag",
                    ),
                ],
                undefined,
                undefined,
                ts.factory.createStrictEquality(
                    ts.factory.createTrue(),
                    ts.factory.createIdentifier("flag"),
                ),
            ),
        ],
    );
}
