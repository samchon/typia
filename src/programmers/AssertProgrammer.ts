import ts from "typescript";

import { IdentifierFactory } from "../factories/IdentifierFactory";
import { TypeFactory } from "../factories/TypeFactory";

// import { StatementFactory } from "../factories/StatementFactory";
import { IProject } from "../transformers/IProject";

import { CheckerProgrammer } from "./CheckerProgrammer";
import { IsProgrammer } from "./IsProgrammer";
import { FunctionImporter } from "./helpers/FunctionImporeter";
import { OptionPredicator } from "./helpers/OptionPredicator";
import { check_object } from "./internal/check_object";

export namespace AssertProgrammer {
    export const generate =
        (
            project: IProject,
            modulo: ts.LeftHandSideExpression,
            equals: boolean = false,
        ) =>
        (type: ts.Type, name?: string) => {
            const importer: FunctionImporter = new FunctionImporter();
            const program: ts.ArrowFunction = CheckerProgrammer.generate(
                project,
                {
                    functors: "$ao",
                    unioners: "$au",
                    path: true,
                    trace: true,
                    numeric: OptionPredicator.numeric(project.options),
                    equals,
                    combiner: combiner(equals)(importer),
                    joiner: joiner(equals)(importer),
                    success: ts.factory.createTrue(),
                },
                importer,
            )(type, name);

            return ts.factory.createArrowFunction(
                undefined,
                undefined,
                [
                    IdentifierFactory.parameter(
                        "input",
                        TypeFactory.keyword("any"),
                    ),
                ],
                ts.factory.createTypeReferenceNode(
                    name ?? TypeFactory.getFullName(project.checker, type),
                ),
                undefined,
                ts.factory.createBlock(
                    [
                        ...importer.declare(modulo),
                        ts.factory.createExpressionStatement(
                            ts.factory.createCallExpression(
                                program,
                                undefined,
                                [
                                    ts.factory.createIdentifier("input"),
                                    ts.factory.createStringLiteral("$input"),
                                    ts.factory.createTrue(),
                                ],
                            ),
                        ),
                        ts.factory.createReturnStatement(
                            ts.factory.createIdentifier(`input`),
                        ),
                    ],
                    true,
                ),
            );
        };

    const combiner =
        (equals: boolean) =>
        (importer: FunctionImporter): CheckerProgrammer.IConfig.Combiner =>
        (explore: CheckerProgrammer.IExplore) => {
            if (explore.tracable === false)
                return IsProgrammer.CONFIG({
                    object: assert_object(equals)(importer),
                    numeric: true,
                })(importer).combiner(explore);

            const path: string = explore.postfix
                ? `_path + ${explore.postfix}`
                : "_path";
            return (logic) => (input, binaries, expected) =>
                logic === "and"
                    ? binaries
                          .map((binary) =>
                              binary.combined
                                  ? binary.expression
                                  : ts.factory.createLogicalOr(
                                        binary.expression,
                                        create_guard_call(importer)(
                                            explore.source === "top"
                                                ? ts.factory.createTrue()
                                                : ts.factory.createIdentifier(
                                                      "_exceptionable",
                                                  ),
                                        )(
                                            ts.factory.createIdentifier(path),
                                            expected,
                                            input,
                                        ),
                                    ),
                          )
                          .reduce(ts.factory.createLogicalAnd)
                    : (() => {
                          const addicted = binaries.slice();
                          if (
                              addicted[addicted.length - 1]!.combined === false
                          ) {
                              addicted.push({
                                  combined: true,
                                  expression: create_guard_call(importer)(
                                      explore.source === "top"
                                          ? ts.factory.createTrue()
                                          : ts.factory.createIdentifier(
                                                "_exceptionable",
                                            ),
                                  )(
                                      ts.factory.createIdentifier(path),
                                      expected,
                                      input,
                                  ),
                              });
                          }
                          return addicted
                              .map((b) => b.expression)
                              .reduce(ts.factory.createLogicalOr);
                      })();
        };

    const assert_object = (equals: boolean) => (importer: FunctionImporter) =>
        check_object({
            equals,
            assert: true,
            undefined: true,
            reduce: ts.factory.createLogicalAnd,
            positive: ts.factory.createTrue(),
            superfluous: (value) =>
                create_guard_call(importer)()(
                    ts.factory.createAdd(
                        ts.factory.createIdentifier("_path"),
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
                        ts.factory.createIdentifier("_exceptionable"),
                    ),
                    expr,
                ),
        })(importer);

    const joiner =
        (equals: boolean) =>
        (importer: FunctionImporter): CheckerProgrammer.IConfig.IJoiner => ({
            object: assert_object(equals)(importer),
            array: (input, arrow) =>
                ts.factory.createCallExpression(
                    IdentifierFactory.join(input, "every"),
                    undefined,
                    [arrow],
                ),
            failure: (value, expected, explore) =>
                create_guard_call(importer)(
                    explore?.from === "top"
                        ? ts.factory.createTrue()
                        : ts.factory.createIdentifier("_exceptionable"),
                )(
                    ts.factory.createIdentifier(
                        explore?.postfix
                            ? `_path + ${explore.postfix}`
                            : "_path",
                    ),
                    expected,
                    value,
                ),
            full: equals
                ? undefined
                : (condition) => (input, expected, explore) =>
                      ts.factory.createLogicalOr(
                          condition,
                          create_guard_call(importer)(
                              explore.from === "top"
                                  ? ts.factory.createTrue()
                                  : ts.factory.createIdentifier(
                                        "_exceptionable",
                                    ),
                          )(
                              ts.factory.createIdentifier("_path"),
                              expected,
                              input,
                          ),
                      ),
        });

    const create_guard_call =
        (importer: FunctionImporter) =>
        (exceptionable?: ts.Expression) =>
        (
            path: ts.Expression,
            expected: string,
            value: ts.Expression,
        ): ts.Expression =>
            ts.factory.createCallExpression(importer.use("guard"), undefined, [
                exceptionable ?? ts.factory.createIdentifier("_exceptionable"),
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
            ]);
}
