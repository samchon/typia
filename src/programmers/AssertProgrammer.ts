import ts from "typescript";

import { IdentifierFactory } from "../factories/IdentifierFactory";
import { StatementFactory } from "../factories/StatementFactory";
import { TypeFactory } from "../factories/TypeFactory";

import { IProgrammerProps } from "../transformers/IProgrammerProps";
import { ITypiaContext } from "../transformers/ITypiaContext";

import { CheckerProgrammer } from "./CheckerProgrammer";
import { FeatureProgrammer } from "./FeatureProgrammer";
import { IsProgrammer } from "./IsProgrammer";
import { FunctionImporter } from "./helpers/FunctionImporter";
import { OptionPredicator } from "./helpers/OptionPredicator";
import { check_object } from "./internal/check_object";

export namespace AssertProgrammer {
  export interface IConfig {
    equals: boolean;
    guard: boolean;
  }
  export interface IProps extends IProgrammerProps {
    config: IConfig;
  }

  export const decompose = (props: {
    context: ITypiaContext;
    config: IConfig;
    importer: FunctionImporter;
    type: ts.Type;
    name: string | undefined;
    init?: ts.Expression | undefined;
  }): FeatureProgrammer.IDecomposed => {
    const is: FeatureProgrammer.IDecomposed = IsProgrammer.decompose({
      ...props,
      config: {
        equals: props.config.equals,
      },
    });
    const composed: FeatureProgrammer.IComposed = CheckerProgrammer.compose({
      ...props,
      config: {
        prefix: "$a",
        path: true,
        trace: true,
        numeric: OptionPredicator.numeric(props.context.options),
        equals: props.config.equals,
        atomist: (explore) => (entry) => (input) =>
          [
            ...(entry.expression ? [entry.expression] : []),
            ...(entry.conditions.length === 0
              ? []
              : entry.conditions.length === 1
                ? entry.conditions[0]!.map((cond) =>
                    ts.factory.createLogicalOr(
                      cond.expression,
                      create_guard_call(props.importer)(
                        explore.from === "top"
                          ? ts.factory.createTrue()
                          : ts.factory.createIdentifier("_exceptionable"),
                      )(
                        ts.factory.createIdentifier(
                          explore.postfix
                            ? `_path + ${explore.postfix}`
                            : "_path",
                        ),
                        cond.expected,
                        input,
                      ),
                    ),
                  )
                : [
                    ts.factory.createLogicalOr(
                      entry.conditions
                        .map((set) =>
                          set
                            .map((s) => s.expression)
                            .reduce((a, b) =>
                              ts.factory.createLogicalAnd(a, b),
                            ),
                        )
                        .reduce((a, b) => ts.factory.createLogicalOr(a, b)),
                      create_guard_call(props.importer)(
                        explore.from === "top"
                          ? ts.factory.createTrue()
                          : ts.factory.createIdentifier("_exceptionable"),
                      )(
                        ts.factory.createIdentifier(
                          explore.postfix
                            ? `_path + ${explore.postfix}`
                            : "_path",
                        ),
                        entry.expected,
                        input,
                      ),
                    ),
                  ]),
          ].reduce((x, y) => ts.factory.createLogicalAnd(x, y)),
        combiner: combiner(props.config.equals)(props.context)(props.importer),
        joiner: joiner(props.config.equals)(props.context)(props.importer),
        success: ts.factory.createTrue(),
      },
    });
    const arrow: ts.ArrowFunction = ts.factory.createArrowFunction(
      undefined,
      undefined,
      [
        IdentifierFactory.parameter("input", TypeFactory.keyword("any")),
        Guardian.parameter(props.init),
      ],
      props.config.guard
        ? ts.factory.createTypePredicateNode(
            ts.factory.createToken(ts.SyntaxKind.AssertsKeyword),
            ts.factory.createIdentifier("input"),
            ts.factory.createTypeReferenceNode(
              props.name ??
                TypeFactory.getFullName(props.context.checker)(props.type),
            ),
          )
        : ts.factory.createTypeReferenceNode(
            props.name ??
              TypeFactory.getFullName(props.context.checker)(props.type),
          ),
      undefined,
      ts.factory.createBlock(
        [
          ts.factory.createIfStatement(
            ts.factory.createStrictEquality(
              ts.factory.createFalse(),
              ts.factory.createCallExpression(
                ts.factory.createIdentifier("__is"),
                undefined,
                [ts.factory.createIdentifier("input")],
              ),
            ),
            ts.factory.createBlock(
              [
                ts.factory.createExpressionStatement(
                  ts.factory.createBinaryExpression(
                    ts.factory.createIdentifier("_errorFactory"),
                    ts.factory.createToken(ts.SyntaxKind.EqualsToken),
                    ts.factory.createIdentifier("errorFactory"),
                  ),
                ),
                ts.factory.createExpressionStatement(
                  ts.factory.createCallExpression(
                    ts.factory.createArrowFunction(
                      undefined,
                      undefined,
                      composed.parameters,
                      undefined,
                      undefined,
                      composed.body,
                    ),
                    undefined,
                    [
                      ts.factory.createIdentifier("input"),
                      ts.factory.createStringLiteral("$input"),
                      ts.factory.createTrue(),
                    ],
                  ),
                ),
              ],
              true,
            ),
            undefined,
          ),
          ...(props.config.guard === false
            ? [
                ts.factory.createReturnStatement(
                  ts.factory.createIdentifier(`input`),
                ),
              ]
            : []),
        ],
        true,
      ),
    );

    return {
      functions: {
        ...is.functions,
        ...composed.functions,
      },
      statements: [
        ...is.statements,
        ...composed.statements,
        StatementFactory.constant("__is", is.arrow),
        StatementFactory.mut("_errorFactory"),
      ],
      arrow,
    };
  };

  export const write = (props: IProps): ts.CallExpression => {
    const importer: FunctionImporter = new FunctionImporter(
      props.modulo.getText(),
    );
    const result: FeatureProgrammer.IDecomposed = decompose({
      ...props,
      importer,
    });
    return FeatureProgrammer.writeDecomposed({
      modulo: props.modulo,
      importer,
      result,
    });
  };

  const combiner =
    (equals: boolean) =>
    (project: ITypiaContext) =>
    (importer: FunctionImporter): CheckerProgrammer.IConfig.Combiner =>
    (explore: CheckerProgrammer.IExplore) => {
      if (explore.tracable === false)
        return IsProgrammer.configure({
          object: assert_object(equals)(project)(importer),
          numeric: true,
        })(project)(importer).combiner(explore);

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
                          : ts.factory.createIdentifier("_exceptionable"),
                      )(ts.factory.createIdentifier(path), expected, input),
                    ),
              )
              .reduce(ts.factory.createLogicalAnd)
          : ts.factory.createLogicalOr(
              binaries
                .map((binary) => binary.expression)
                .reduce(ts.factory.createLogicalOr),
              create_guard_call(importer)(
                explore.source === "top"
                  ? ts.factory.createTrue()
                  : ts.factory.createIdentifier("_exceptionable"),
              )(ts.factory.createIdentifier(path), expected, input),
            );
      // : (() => {
      //       const addicted = binaries.slice();
      //       if (
      //           addicted[addicted.length - 1]!.combined === false
      //       ) {
      //           addicted.push({
      //               combined: true,
      //               expression: create_guard_call(importer)(
      //                   explore.source === "top"
      //                       ? ts.factory.createTrue()
      //                       : ts.factory.createIdentifier(
      //                             "_exceptionable",
      //                         ),
      //               )(
      //                   ts.factory.createIdentifier(path),
      //                   expected,
      //                   input,
      //               ),
      //           });
      //       }
      //       return addicted
      //           .map((b) => b.expression)
      //           .reduce(ts.factory.createLogicalOr);
      //   })();
    };

  const assert_object =
    (equals: boolean) =>
    (project: ITypiaContext) =>
    (importer: FunctionImporter) =>
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
              ts.factory.createCallExpression(importer.use("join"), undefined, [
                ts.factory.createIdentifier("key"),
              ]),
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
      })(project)(importer);

  const joiner =
    (equals: boolean) =>
    (project: ITypiaContext) =>
    (importer: FunctionImporter): CheckerProgrammer.IConfig.IJoiner => ({
      object: assert_object(equals)(project)(importer),
      array: (props) =>
        ts.factory.createCallExpression(
          IdentifierFactory.access(props.input)("every"),
          undefined,
          [props.arrow],
        ),
      failure: (value, expected, explore) =>
        create_guard_call(importer)(
          explore?.from === "top"
            ? ts.factory.createTrue()
            : ts.factory.createIdentifier("_exceptionable"),
        )(
          ts.factory.createIdentifier(
            explore?.postfix ? `_path + ${explore.postfix}` : "_path",
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
                  : ts.factory.createIdentifier("_exceptionable"),
              )(ts.factory.createIdentifier("_path"), expected, input),
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
        ts.factory.createIdentifier("_errorFactory"),
      ]);

  export namespace Guardian {
    export const identifier = () => ts.factory.createIdentifier("errorFactory");
    export const parameter = (init: ts.Expression | undefined) =>
      IdentifierFactory.parameter(
        "errorFactory",
        type(),
        init ?? ts.factory.createToken(ts.SyntaxKind.QuestionToken),
      );
    export const type = () =>
      ts.factory.createFunctionTypeNode(
        undefined,
        [
          ts.factory.createParameterDeclaration(
            undefined,
            undefined,
            ts.factory.createIdentifier("p"),
            undefined,
            ts.factory.createImportTypeNode(
              ts.factory.createLiteralTypeNode(
                ts.factory.createStringLiteral("typia"),
              ),
              undefined,
              ts.factory.createQualifiedName(
                ts.factory.createIdentifier("TypeGuardError"),
                ts.factory.createIdentifier("IProps"),
              ),
              undefined,
              false,
            ),
            undefined,
          ),
        ],
        ts.factory.createTypeReferenceNode(
          ts.factory.createIdentifier("Error"),
          undefined,
        ),
      );
  }
}
