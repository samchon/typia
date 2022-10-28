import ts from "typescript";

import { IdentifierFactory } from "../factories/IdentifierFactory";
import { StatementFactory } from "../factories/StatementFactory";
import { ValueFactory } from "../factories/ValueFactory";

import { IProject } from "../transformers/IProject";

import { CheckerProgrammer } from "./CheckerProgrammer";
import { IsProgrammer } from "./IsProgrammer";
import { FunctionImporter } from "./helpers/FunctionImporeter";
import { check_array } from "./internal/check_array";
import { check_everything } from "./internal/check_everything";
import { check_object } from "./internal/check_object";

export namespace ValidateProgrammer {
    export function generate(
        project: IProject,
        modulo: ts.LeftHandSideExpression,
        equals: boolean = false,
    ) {
        const importer = new FunctionImporter();
        return (type: ts.Type) =>
            ts.factory.createArrowFunction(
                undefined,
                undefined,
                [IdentifierFactory.parameter("input")],
                undefined,
                undefined,
                ts.factory.createBlock([
                    StatementFactory.constant("$out", create_output()),
                    StatementFactory.constant(
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
                                    numeric: !!project.options.numeric,
                                    equals,
                                    combiner: combine(equals)(importer),
                                    joiner: join(equals)(importer),
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

const combine: (
    equals: boolean,
) => (importer: FunctionImporter) => CheckerProgrammer.IConfig.Combiner =
    (equals) => (importer) => (explore) => {
        const combiner = IsProgrammer.CONFIG({
            object: validate_object(equals)(importer),
            numeric: true,
        }).combiner;
        if (explore.tracable === false && explore.from !== "top")
            return combiner(explore);

        const path: string = explore.postfix
            ? `path + ${explore.postfix}`
            : "path";
        return (logic) => (input, expressions, expected) =>
            expressions.length === 1 && ts.isCallExpression(expressions[0]!)
                ? expressions[0]
                : ts.factory.createCallExpression(
                      ts.factory.createIdentifier("$pred"),
                      [],
                      [
                          combiner(explore)(logic)(
                              input,
                              expressions,
                              expected,
                          ),
                          explore.source === "top"
                              ? ts.factory.createTrue()
                              : ts.factory.createIdentifier("exceptionable"),
                          create_report_function(
                              ts.factory.createIdentifier(path),
                              expected,
                              input,
                          ),
                      ],
                  );
    };

const validate_object = (equals: boolean) => (importer: FunctionImporter) =>
    check_object(equals)(false)((expr) =>
        ts.factory.createLogicalOr(
            ts.factory.createStrictEquality(
                ts.factory.createFalse(),
                ts.factory.createIdentifier("exceptionable"),
            ),
            expr,
        ),
    )((expr) =>
        ts.factory.createCallExpression(
            ts.factory.createIdentifier("$pred"),
            undefined,
            [
                expr,
                ts.factory.createIdentifier("exceptionable"),
                create_report_function(
                    ts.factory.createAdd(
                        ts.factory.createIdentifier("path"),
                        ts.factory.createCallExpression(
                            importer.use("join"),
                            undefined,
                            [ts.factory.createIdentifier("key")],
                        ),
                    ),
                    "undefined",
                    ts.factory.createIdentifier("value"),
                ),
            ],
        ),
    );

const join: (
    equals: boolean,
) => (importer: FunctionImporter) => CheckerProgrammer.IConfig.IJoiner =
    (equals) => (importer) => ({
        object: validate_object(equals)(importer),
        array: (input, arrow, tags) =>
            check_array(
                input,
                arrow,
                tags,
                check_everything(
                    ts.factory.createCallExpression(
                        IdentifierFactory.join(input, "map"),
                        undefined,
                        [arrow],
                    ),
                ),
            ),
        tuple: (binaries) =>
            check_everything(
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
    path: ts.Expression,
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
                ts.factory.createPropertyAssignment("path", path),
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
