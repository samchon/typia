import ts from "typescript";

import { IdentifierFactory } from "../factories/IdentifierFactory";
import { ValueFactory } from "../factories/ValueFactory";

import { IProject } from "../transformers/IProject";

import { CheckerProgrammer } from "./CheckerProgrammer";
import { IsProgrammer } from "./IsProgrammer";
import { FunctionImporter } from "./helpers/FunctionImporeter";
import { check_object } from "./internal/check_object";

export namespace AssertProgrammer {
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
                    ts.factory.createExpressionStatement(
                        ts.factory.createCallExpression(
                            CheckerProgrammer.generate(
                                project,
                                {
                                    functors: "$ao",
                                    unioners: "$au",
                                    trace: true,
                                    numeric: !!project.options.numeric,
                                    equals,
                                    combiner: combine(equals)(importer),
                                    joiner: CheckerProgrammer.DEFAULT_JOINER(
                                        assert_object(equals)(importer),
                                    ),
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

const combine =
    (equals: boolean) =>
    (importer: FunctionImporter): CheckerProgrammer.IConfig.Combiner => {
        return (explore: CheckerProgrammer.IExplore) => {
            const combiner = IsProgrammer.CONFIG({
                object: assert_object(equals)(importer),
                numeric: true,
            }).combiner;
            if (explore.tracable === false && explore.from !== "top")
                return combiner(explore);

            const path: string = explore.postfix
                ? `path + ${explore.postfix}`
                : "path";
            return (logic) => (input, expressions, expected) =>
                expressions.length === 0 && ts.isCallExpression(expressions[0]!)
                    ? expressions[0]
                    : ts.factory.createCallExpression(
                          importer.use("predicate"),
                          [],
                          [
                              combiner(explore)(logic)(
                                  input,
                                  expressions,
                                  expected,
                              ),
                              explore.source === "top"
                                  ? ts.factory.createTrue()
                                  : ts.factory.createIdentifier(
                                        "exceptionable",
                                    ),
                              create_throw_function(
                                  ts.factory.createIdentifier(path),
                                  expected,
                                  input,
                              ),
                          ],
                      );
        };
    };

const assert_object = (equals: boolean) => (importer: FunctionImporter) =>
    check_object(equals)(true)((expr) =>
        ts.factory.createLogicalOr(
            ts.factory.createStrictEquality(
                ts.factory.createFalse(),
                ts.factory.createIdentifier("exceptionable"),
            ),
            expr,
        ),
    )((expr) =>
        ts.factory.createCallExpression(importer.use("predicate"), undefined, [
            expr,
            ts.factory.createIdentifier("exceptionable"),
            create_throw_function(
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
        ]),
    );

function create_throw_function(
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
