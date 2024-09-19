import ts from "typescript";

import { ExpressionFactory } from "../factories/ExpressionFactory";
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
import { check_everything } from "./internal/check_everything";
import { check_object } from "./internal/check_object";

export namespace ValidateProgrammer {
  export interface IConfig {
    equals: boolean;
  }
  export interface IProps extends IProgrammerProps {
    config: IConfig;
  }

  export const decompose = (props: {
    context: ITypiaContext;
    modulo: ts.LeftHandSideExpression;
    importer: FunctionImporter;
    config: IConfig;
    type: ts.Type;
    name: string | undefined;
  }): FeatureProgrammer.IDecomposed => {
    const is: FeatureProgrammer.IDecomposed = IsProgrammer.decompose(props);
    const composed: FeatureProgrammer.IComposed = CheckerProgrammer.compose({
      ...props,
      config: {
        prefix: "$v",
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
                      create_report_call(
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
                      create_report_call(
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
        combiner: combine(props.config.equals)(props.context)(props.importer),
        joiner: joiner(props.config.equals)(props.context)(props.importer),
        success: ts.factory.createTrue(),
      },
    });
    const arrow: ts.ArrowFunction = ts.factory.createArrowFunction(
      undefined,
      undefined,
      [IdentifierFactory.parameter("input", TypeFactory.keyword("any"))],
      ts.factory.createTypeReferenceNode(
        `typia.IValidation<${
          props.name ??
          TypeFactory.getFullName(props.context.checker)(props.type)
        }>`,
      ),
      undefined,
      ts.factory.createBlock(
        [
          // validate when false === is<T>(input)
          ts.factory.createIfStatement(
            ts.factory.createStrictEquality(
              ts.factory.createFalse(),
              ts.factory.createCallExpression(
                ts.factory.createIdentifier("__is"),
                undefined,
                [ts.factory.createIdentifier("input")],
              ),
            ),
            ts.factory.createBlock([
              // prepare errors
              ts.factory.createExpressionStatement(
                ts.factory.createBinaryExpression(
                  ts.factory.createIdentifier("errors"),
                  ts.factory.createToken(ts.SyntaxKind.EqualsToken),
                  ts.factory.createArrayLiteralExpression([]),
                ),
              ),
              ts.factory.createExpressionStatement(
                ts.factory.createBinaryExpression(
                  ts.factory.createIdentifier("$report"),
                  ts.factory.createToken(ts.SyntaxKind.EqualsToken),
                  ts.factory.createCallExpression(
                    IdentifierFactory.access(
                      ts.factory.createParenthesizedExpression(
                        ts.factory.createAsExpression(
                          props.modulo,
                          TypeFactory.keyword("any"),
                        ),
                      ),
                    )("report"),
                    [],
                    [ts.factory.createIdentifier("errors")],
                  ),
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
              StatementFactory.constant(
                "success",
                ts.factory.createStrictEquality(
                  ExpressionFactory.number(0),
                  ts.factory.createIdentifier("errors.length"),
                ),
              ),
              ts.factory.createReturnStatement(
                ts.factory.createAsExpression(
                  create_output(),
                  TypeFactory.keyword("any"),
                ),
              ),
            ]),
          ),
          ts.factory.createReturnStatement(
            ts.factory.createAsExpression(
              ts.factory.createObjectLiteralExpression(
                [
                  ts.factory.createPropertyAssignment(
                    "success",
                    ts.factory.createTrue(),
                  ),
                  ts.factory.createPropertyAssignment(
                    "errors",
                    ts.factory.createArrayLiteralExpression([]),
                  ),
                  ts.factory.createPropertyAssignment(
                    "data",
                    ts.factory.createIdentifier("input"),
                  ),
                ],
                true,
              ),
              TypeFactory.keyword("any"),
            ),
          ),
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
        StatementFactory.mut("errors"),
        StatementFactory.mut("$report"),
      ],
      arrow,
    };
  };

  export const write = (props: IProps) => {
    const importer: FunctionImporter = new FunctionImporter(
      props.modulo.getText(),
    );
    const result: FeatureProgrammer.IDecomposed = decompose({
      config: props.config,
      context: props.context,
      modulo: props.modulo,
      importer,
      type: props.type,
      name: props.name,
    });
    return FeatureProgrammer.writeDecomposed({
      modulo: props.modulo,
      importer,
      result,
    });
  };
}

const combine =
  (equals: boolean) =>
  (project: ITypiaContext) =>
  (importer: FunctionImporter): CheckerProgrammer.IConfig.Combiner =>
  (explore: CheckerProgrammer.IExplore) => {
    if (explore.tracable === false)
      return IsProgrammer.configure({
        object: validate_object(equals)(project)(importer),
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
                    create_report_call(
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
            create_report_call(
              explore.source === "top"
                ? ts.factory.createTrue()
                : ts.factory.createIdentifier("_exceptionable"),
            )(ts.factory.createIdentifier(path), expected, input),
          );
  };

const validate_object =
  (equals: boolean) =>
  (project: ITypiaContext) =>
  (importer: FunctionImporter) =>
    check_object({
      equals,
      undefined: true,
      assert: false,
      reduce: ts.factory.createLogicalAnd,
      positive: ts.factory.createTrue(),
      superfluous: (value) =>
        create_report_call()(
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
    object: validate_object(equals)(project)(importer),
    array: (props) =>
      check_everything(
        ts.factory.createCallExpression(
          IdentifierFactory.access(props.input)("map"),
          undefined,
          [props.arrow],
        ),
      ),
    failure: (value, expected, explore) =>
      create_report_call(
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
    tuple: (binaries) =>
      check_everything(ts.factory.createArrayLiteralExpression(binaries, true)),
  });

const create_output = () =>
  ts.factory.createObjectLiteralExpression(
    [
      ts.factory.createShorthandPropertyAssignment("success"),
      ts.factory.createShorthandPropertyAssignment("errors"),
      ts.factory.createPropertyAssignment(
        "data",
        ts.factory.createConditionalExpression(
          ts.factory.createIdentifier("success"),
          undefined,
          ts.factory.createIdentifier("input"),
          undefined,
          ts.factory.createIdentifier("undefined"),
        ),
      ),
    ],
    true,
  );

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
      ],
    );
