import ts from "typescript";

import { IdentifierFactory } from "../factories/IdentifierFactory";
// import { StatementFactory } from "../factories/StatementFactory";
import { ValueFactory } from "../factories/ValueFactory";

import { IProject } from "../transformers/IProject";

import { CheckerProgrammer } from "./CheckerProgrammer";
import { IsProgrammer } from "./IsProgrammer";
import { FunctionImporter } from "./helpers/FunctionImporeter";
import { check_object } from "./internal/check_object";

// /* -----------------------------------------------------------
//     ASSERT V2 -> USE (NULL OR ERROR) CONDITION
// ----------------------------------------------------------- */
// export namespace AssertProgrammerV2 {
//     export const generate =
//         (
//             project: IProject,
//             modulo: ts.LeftHandSideExpression,
//             equals: boolean = false,
//         ) =>
//         (type: ts.Type) => {
//             const importer: FunctionImporter = new FunctionImporter();
//             const guardV2: ts.Expression = importer.use("guardV2");

//             const program: ts.ArrowFunction = CheckerProgrammer.generate(
//                 project,
//                 {
//                     functors: "$ao",
//                     unioners: "$au",
//                     path: true,
//                     trace: true,
//                     numeric: !!project.options.numeric,
//                     equals,
//                     combiner,
//                     joiner: joiner(equals)(importer),
//                     success: ts.factory.createNull(),
//                 },
//                 importer,
//             )(type);

//             return ts.factory.createArrowFunction(
//                 undefined,
//                 undefined,
//                 [IdentifierFactory.parameter("input")],
//                 undefined,
//                 undefined,
//                 ts.factory.createBlock(
//                     [
//                         ...importer.declare(modulo),
//                         StatementFactory.constant(
//                             "error",
//                             ts.factory.createCallExpression(
//                                 program,
//                                 undefined,
//                                 [
//                                     ValueFactory.INPUT(),
//                                     ts.factory.createStringLiteral("$input"),
//                                 ],
//                             ),
//                         ),
//                         ts.factory.createIfStatement(
//                             ts.factory.createStrictInequality(
//                                 ts.factory.createNull(),
//                                 ts.factory.createIdentifier("error"),
//                             ),
//                             ts.factory.createThrowStatement(
//                                 ts.factory.createCallExpression(
//                                     guardV2,
//                                     undefined,
//                                     [ts.factory.createIdentifier("error")],
//                                 ),
//                             ),
//                         ),
//                         ts.factory.createReturnStatement(ValueFactory.INPUT()),
//                     ],
//                     true,
//                 ),
//             );
//         };

//     const combiner: CheckerProgrammer.IConfig.Combiner = (
//         explore: CheckerProgrammer.IExplore,
//     ) => {
//         const path: string = explore.postfix
//             ? `path + ${explore.postfix}`
//             : "path";
//         return (logic) => (input, binaries, expected) =>
//             binaries
//                 .map((binary) =>
//                     binary.combined
//                         ? binary.expression
//                         : ts.factory.createParenthesizedExpression(
//                               ts.factory.createConditionalExpression(
//                                   binary.expression,
//                                   undefined,
//                                   ts.factory.createNull(),
//                                   undefined,
//                                   create_exception_props(
//                                       ts.factory.createIdentifier(path),
//                                       expected,
//                                       input,
//                                   ),
//                               ),
//                           ),
//                 )
//                 .reduce(
//                     logic === "and"
//                         ? ts.factory.createLogicalOr
//                         : ts.factory.createLogicalAnd,
//                 );
//     };

//     const assert_object = (equals: boolean) => (importer: FunctionImporter) =>
//         check_object({
//             equals,
//             assert: true,
//             reduce: ts.factory.createLogicalOr,
//             positive: ts.factory.createNull(),
//             superfluous: (value) =>
//                 create_exception_props(
//                     ts.factory.createAdd(
//                         ts.factory.createIdentifier("path"),
//                         ts.factory.createCallExpression(
//                             importer.use("join"),
//                             undefined,
//                             [ts.factory.createIdentifier("key")],
//                         ),
//                     ),
//                     "undefined",
//                     value,
//                 ),
//             entries: importer.use("every"),
//             halt: (expr) =>
//                 ts.factory.createConditionalExpression(
//                     ts.factory.createStrictEquality(
//                         ts.factory.createFalse(),
//                         ts.factory.createIdentifier("exceptionable"),
//                     ),
//                     undefined,
//                     ts.factory.createNull(),
//                     undefined,
//                     expr,
//                 ),
//         });

//     const joiner =
//         (equals: boolean) =>
//         (importer: FunctionImporter): CheckerProgrammer.IConfig.IJoiner => ({
//             object: assert_object(equals)(importer),
//             array: (input, arrow) =>
//                 ts.factory.createCallExpression(
//                     importer.use("every"),
//                     undefined,
//                     [input, arrow],
//                 ),
//             failure: (value, expected, explore) =>
//                 create_exception_props(
//                     ts.factory.createIdentifier(
//                         explore?.postfix ? `path + ${explore.postfix}` : "path",
//                     ),
//                     expected,
//                     value,
//                 ),
//             is: (exp) =>
//                 ts.factory.createStrictEquality(
//                     ts.factory.createNull(),
//                     ts.factory.createParenthesizedExpression(exp),
//                 ),
//             required: (value) =>
//                 ts.factory.createConditionalExpression(
//                     value,
//                     undefined,
//                     ts.factory.createNull(),
//                     undefined,
//                     create_exception_props(
//                         ts.factory.createStringLiteral(""),
//                         "not undefined",
//                         value,
//                     ),
//                 ),
//             full: equals
//                 ? undefined
//                 : (condition) => (input, expected) =>
//                       ts.factory.createConditionalExpression(
//                           ts.factory.createStrictEquality(
//                               ts.factory.createNull(),
//                               condition,
//                           ),
//                           undefined,
//                           ts.factory.createNull(),
//                           undefined,
//                           create_exception_props(
//                               ts.factory.createIdentifier("path"),
//                               expected,
//                               input,
//                           ),
//                       ),
//         });

//     function create_exception_props(
//         path: ts.Expression,
//         expected: string,
//         value: ts.Expression,
//     ): ts.ObjectLiteralExpression {
//         return ts.factory.createObjectLiteralExpression(
//             [
//                 ts.factory.createPropertyAssignment("path", path),
//                 ts.factory.createPropertyAssignment(
//                     "expected",
//                     ts.factory.createStringLiteral(expected),
//                 ),
//                 ts.factory.createPropertyAssignment("value", value),
//             ],
//             true,
//         );
//     }
// }

/* -----------------------------------------------------------
    ASSERT V3 -> (CONDITION OR THROW(exceptable): FALSE)
----------------------------------------------------------- */
export namespace AssertProgrammer {
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
                    functors: "$ao",
                    unioners: "$au",
                    path: true,
                    trace: true,
                    numeric: !!project.options.numeric,
                    equals,
                    combiner: combiner(equals)(importer),
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
                        ts.factory.createReturnStatement(ValueFactory.INPUT()),
                    ],
                    true,
                ),
            );
        };

    const combiner =
        (equals: boolean) =>
        (importer: FunctionImporter): CheckerProgrammer.IConfig.Combiner =>
        (explore: CheckerProgrammer.IExplore) => {
            if (explore.tracable === false && explore.from !== "top")
                return IsProgrammer.CONFIG({
                    object: assert_object(equals)(importer),
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
                                        create_guard_call(importer)(
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
                                                "exceptionable",
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

            // ts.factory.createLogicalOr(
            //       binaries
            //           .map((binary) => binary.expression)
            //           .reduce(ts.factory.createLogicalOr),
            //       create_guard_call(importer)(
            //           explore.source === "top"
            //               ? ts.factory.createTrue()
            //               : ts.factory.createIdentifier(
            //                     "exceptionable",
            //                 ),
            //       )(ts.factory.createIdentifier(path), expected, input),
            //   );
        };

    const assert_object = (equals: boolean) => (importer: FunctionImporter) =>
        check_object({
            equals,
            assert: true,
            reduce: ts.factory.createLogicalAnd,
            positive: ts.factory.createTrue(),
            superfluous: (value) =>
                create_guard_call(importer)()(
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
                        : ts.factory.createIdentifier("exceptionable"),
                )(
                    ts.factory.createIdentifier(
                        explore?.postfix ? `path + ${explore.postfix}` : "path",
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
                                        "exceptionable",
                                    ),
                          )(
                              ts.factory.createIdentifier("path"),
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
            ]);
}
