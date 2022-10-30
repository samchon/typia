import ts from "typescript";

import { IdentifierFactory } from "../factories/IdentifierFactory";
import { StatementFactory } from "../factories/StatementFactory";
import { ValueFactory } from "../factories/ValueFactory";

import { IProject } from "../transformers/IProject";

import { CheckerProgrammer } from "./CheckerProgrammer";
import { IsProgrammer } from "./IsProgrammer";
import { FunctionImporter } from "./helpers/FunctionImporeter";
import { check_everything } from "./internal/check_everything";
import { check_object } from "./internal/check_object";

export namespace ValidateProgrammer {
    export const generate =
        (
            project: IProject,
            modulo: ts.LeftHandSideExpression,
            equals: boolean = false,
        ) =>
        (type: ts.Type) => {
            const importer: FunctionImporter = new FunctionImporter();
            const program: ts.ArrowFunction = CheckerProgrammer.generate(
                project,
                {
                    functors: "$vo",
                    unioners: "$vu",
                    path: true,
                    trace: true,
                    numeric: !!project.options.numeric,
                    equals,
                    combiner: combine(equals)(importer),
                    joiner: joiner(equals)(importer),
                    success: ts.factory.createTrue(),
                },
                importer,
            )(type);

            return ts.factory.createArrowFunction(
                undefined,
                undefined,
                [IdentifierFactory.parameter("input")],
                undefined,
                undefined,
                ts.factory.createBlock(
                    [
                        StatementFactory.constant("$out", create_output()),
                        StatementFactory.constant(
                            "$report",
                            ts.factory.createCallExpression(
                                IdentifierFactory.join(modulo, "report"),
                                [],
                                [ts.factory.createIdentifier("$out")],
                            ),
                        ),
                        ...importer.declare(modulo),
                        ts.factory.createExpressionStatement(
                            ts.factory.createCallExpression(
                                program,
                                undefined,
                                [
                                    ValueFactory.INPUT(),
                                    ts.factory.createStringLiteral("$input"),
                                    ts.factory.createTrue(),
                                ],
                            ),
                        ),
                        ts.factory.createIfStatement(
                            ts.factory.createStrictInequality(
                                ts.factory.createNumericLiteral(0),
                                ts.factory.createIdentifier(
                                    "$out.errors.length",
                                ),
                            ),
                            ts.factory.createExpressionStatement(
                                ts.factory.createBinaryExpression(
                                    ts.factory.createPropertyAccessExpression(
                                        ts.factory.createIdentifier("$out"),
                                        ts.factory.createIdentifier("success"),
                                    ),
                                    ts.factory.createToken(
                                        ts.SyntaxKind.EqualsToken,
                                    ),
                                    ts.factory.createFalse(),
                                ),
                            ),
                        ),
                        ts.factory.createReturnStatement(
                            ts.factory.createIdentifier("$out"),
                        ),
                    ],
                    true,
                ),
            );
        };
}

const combine =
    (equals: boolean) =>
    (importer: FunctionImporter): CheckerProgrammer.IConfig.Combiner =>
    (explore: CheckerProgrammer.IExplore) => {
        if (explore.tracable === false && explore.from !== "top")
            return IsProgrammer.CONFIG({
                object: validate_object(equals)(importer),
                numeric: true,
            }).combiner(explore);

        const path: string = explore.postfix
            ? `path + ${explore.postfix}`
            : "path";
        return (logic) => (input, binaries, expected) =>
            logic === "and"
                ? binaries
                      .map((binary) =>
                          binary.combined
                              ? binary.expression
                              : ts.factory.createLogicalOr(
                                    binary.expression,
                                    create_report_call(
                                        explore.source === "top"
                                            ? ts.factory.createTrue()
                                            : ts.factory.createIdentifier(
                                                  "exceptionable",
                                              ),
                                    )(
                                        ts.factory.createIdentifier(path),
                                        expected,
                                        input,
                                    ),
                                ),
                      )
                      .reduce(ts.factory.createLogicalAnd)
                : ts.factory.createLogicalOr(
                      binaries
                          .map((binary) => binary.expression)
                          .reduce(ts.factory.createLogicalOr),
                      create_report_call(
                          explore.source === "top"
                              ? ts.factory.createTrue()
                              : ts.factory.createIdentifier("exceptionable"),
                      )(ts.factory.createIdentifier(path), expected, input),
                  );
    };

const validate_object = (equals: boolean) => (importer: FunctionImporter) =>
    check_object({
        equals,
        assert: false,
        reduce: ts.factory.createLogicalAnd,
        positive: ts.factory.createTrue(),
        superfluous: (value) =>
            create_report_call()(
                ts.factory.createAdd(
                    ts.factory.createIdentifier("path"),
                    ts.factory.createCallExpression(
                        importer.use("join"),
                        undefined,
                        [ts.factory.createIdentifier("key")],
                    ),
                ),
                "undefined",
                value,
            ),
        halt: (expr) =>
            ts.factory.createLogicalOr(
                ts.factory.createStrictEquality(
                    ts.factory.createFalse(),
                    ts.factory.createIdentifier("exceptionable"),
                ),
                expr,
            ),
    });

const joiner =
    (equals: boolean) =>
    (importer: FunctionImporter): CheckerProgrammer.IConfig.IJoiner => ({
        object: validate_object(equals)(importer),
        array: (input, arrow) =>
            check_everything(
                ts.factory.createCallExpression(
                    IdentifierFactory.join(input, "map"),
                    undefined,
                    [arrow],
                ),
            ),
        failure: (value, expected, explore) =>
            create_report_call(
                explore?.from === "top"
                    ? ts.factory.createTrue()
                    : ts.factory.createIdentifier("exceptionable"),
            )(
                ts.factory.createIdentifier(
                    explore?.postfix ? `path + ${explore.postfix}` : "path",
                ),
                expected,
                value,
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

const create_report_call =
    (exceptionable?: ts.Expression) =>
    (
        path: ts.Expression,
        expected: string,
        value: ts.Expression,
    ): ts.Expression =>
        ts.factory.createCallExpression(
            ts.factory.createIdentifier("$report"),
            undefined,
            [
                exceptionable || ts.factory.createIdentifier("exceptionable"),
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
            ],
        );
