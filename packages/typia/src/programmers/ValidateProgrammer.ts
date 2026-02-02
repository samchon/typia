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
import { FunctionProgrammer } from "./helpers/FunctionProgrammer";
import { IExpressionEntry } from "./helpers/IExpressionEntry";
import { OptionPredicator } from "./helpers/OptionPredicator";
import { check_everything } from "./internal/check_everything";
import { check_object } from "./internal/check_object";

export namespace ValidateProgrammer {
  export interface IConfig {
    equals: boolean;
    standardSchema?: boolean;
  }
  export interface IProps extends IProgrammerProps {
    config: IConfig;
  }

  export const decompose = (props: {
    context: ITypiaContext;
    modulo: ts.LeftHandSideExpression;
    functor: FunctionProgrammer;
    config: IConfig;
    type: ts.Type;
    name: string | undefined;
  }): FeatureProgrammer.IDecomposed => {
    const is: FeatureProgrammer.IDecomposed = IsProgrammer.decompose(props);
    const composed: FeatureProgrammer.IComposed = CheckerProgrammer.compose({
      ...props,
      config: {
        prefix: "_v",
        path: true,
        trace: true,
        numeric: OptionPredicator.numeric(props.context.options),
        equals: props.config.equals,
        atomist: (next) =>
          [
            ...(next.entry.expression ? [next.entry.expression] : []),
            ...(next.entry.conditions.length === 0
              ? []
              : next.entry.conditions.length === 1
                ? next.entry.conditions[0]!.map((cond) =>
                    ts.factory.createLogicalOr(
                      cond.expression,
                      create_report_call({
                        exceptionable:
                          next.explore.from === "top"
                            ? ts.factory.createTrue()
                            : ts.factory.createIdentifier("_exceptionable"),
                        path: ts.factory.createIdentifier(
                          next.explore.postfix
                            ? `_path + ${next.explore.postfix}`
                            : "_path",
                        ),
                        expected: cond.expected,
                        value: next.input,
                      }),
                    ),
                  )
                : [
                    ts.factory.createLogicalOr(
                      next.entry.conditions
                        .map((set) =>
                          set
                            .map((s) => s.expression)
                            .reduce((a, b) =>
                              ts.factory.createLogicalAnd(a, b),
                            ),
                        )
                        .reduce((a, b) => ts.factory.createLogicalOr(a, b)),
                      create_report_call({
                        exceptionable:
                          next.explore.from === "top"
                            ? ts.factory.createTrue()
                            : ts.factory.createIdentifier("_exceptionable"),
                        path: ts.factory.createIdentifier(
                          next.explore.postfix
                            ? `_path + ${next.explore.postfix}`
                            : "_path",
                        ),
                        expected: next.entry.expected,
                        value: next.input,
                      }),
                    ),
                  ]),
          ].reduce((x, y) => ts.factory.createLogicalAnd(x, y)),
        combiner: combine(props),
        joiner: joiner(props),
        success: ts.factory.createTrue(),
      },
    });
    const arrow: ts.ArrowFunction = ts.factory.createArrowFunction(
      undefined,
      undefined,
      [IdentifierFactory.parameter("input", TypeFactory.keyword("any"))],
      props.context.importer.type({
        file: "typia",
        name: "IValidation",
        arguments: [
          ts.factory.createTypeReferenceNode(
            props.name ??
              TypeFactory.getFullName({
                checker: props.context.checker,
                type: props.type,
              }),
          ),
        ],
      }),
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
                  ts.factory.createIdentifier("_report"),
                  ts.factory.createToken(ts.SyntaxKind.EqualsToken),
                  ts.factory.createCallExpression(
                    ts.factory.createAsExpression(
                      props.context.importer.internal("validateReport"),
                      TypeFactory.keyword("any"),
                    ),
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
              StatementFactory.constant({
                name: "success",
                value: ts.factory.createStrictEquality(
                  ExpressionFactory.number(0),
                  ts.factory.createIdentifier("errors.length"),
                ),
              }),
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
        StatementFactory.constant({
          name: "__is",
          value: is.arrow,
        }),
        StatementFactory.mut({ name: "errors" }),
        StatementFactory.mut({ name: "_report" }),
      ],
      arrow,
    };
  };

  export const write = (props: IProps) => {
    const functor: FunctionProgrammer = new FunctionProgrammer(
      props.modulo.getText(),
    );
    const result: FeatureProgrammer.IDecomposed = decompose({
      config: props.config,
      context: props.context,
      modulo: props.modulo,
      functor,
      type: props.type,
      name: props.name,
    });
    return FeatureProgrammer.writeDecomposed({
      modulo: props.modulo,
      functor,
      result,
      returnWrapper: props.config.standardSchema
        ? (arrow) =>
            ts.factory.createCallExpression(
              props.context.importer.internal("createStandardSchema"),
              undefined,
              [arrow],
            )
        : undefined,
    });
  };
}

const combine =
  (props: {
    config: ValidateProgrammer.IConfig;
    context: ITypiaContext;
    functor: FunctionProgrammer;
  }): CheckerProgrammer.IConfig.Combiner =>
  (next) => {
    if (next.explore.tracable === false)
      return IsProgrammer.configure({
        options: {
          object: (v) =>
            validate_object({
              context: props.context,
              functor: props.functor,
              config: props.config,
              entries: v.entries,
              input: v.input,
            }),
          numeric: true,
        },
        context: props.context,
        functor: props.functor,
      }).combiner(next);

    const path: string = next.explore.postfix
      ? `_path + ${next.explore.postfix}`
      : "_path";
    return next.logic === "and"
      ? next.binaries
          .map((binary) =>
            binary.combined
              ? binary.expression
              : ts.factory.createLogicalOr(
                  binary.expression,
                  create_report_call({
                    exceptionable:
                      next.explore.source === "top"
                        ? ts.factory.createTrue()
                        : ts.factory.createIdentifier("_exceptionable"),
                    path: ts.factory.createIdentifier(path),
                    expected: next.expected,
                    value: next.input,
                  }),
                ),
          )
          .reduce(ts.factory.createLogicalAnd)
      : ts.factory.createLogicalOr(
          next.binaries
            .map((binary) => binary.expression)
            .reduce(ts.factory.createLogicalOr),
          create_report_call({
            exceptionable:
              next.explore.source === "top"
                ? ts.factory.createTrue()
                : ts.factory.createIdentifier("_exceptionable"),
            path: ts.factory.createIdentifier(path),
            expected: next.expected,
            value: next.input,
          }),
        );
  };

const validate_object = (props: {
  config: ValidateProgrammer.IConfig;
  context: ITypiaContext;
  functor: FunctionProgrammer;
  entries: IExpressionEntry<ts.Expression>[];
  input: ts.Expression;
}) =>
  check_object({
    config: {
      equals: props.config.equals,
      undefined: true,
      assert: false,
      reduce: ts.factory.createLogicalAnd,
      positive: ts.factory.createTrue(),
      superfluous: (input, description) =>
        create_report_call({
          path: ts.factory.createAdd(
            ts.factory.createIdentifier("_path"),
            ts.factory.createCallExpression(
              props.context.importer.internal("accessExpressionAsString"),
              undefined,
              [ts.factory.createIdentifier("key")],
            ),
          ),
          expected: "undefined",
          value: input,
          description,
        }),
      halt: (expr) =>
        ts.factory.createLogicalOr(
          ts.factory.createStrictEquality(
            ts.factory.createFalse(),
            ts.factory.createIdentifier("_exceptionable"),
          ),
          expr,
        ),
    },
    context: props.context,
    entries: props.entries,
    input: props.input,
  });

const joiner = (props: {
  config: ValidateProgrammer.IConfig;
  context: ITypiaContext;
  functor: FunctionProgrammer;
}): CheckerProgrammer.IConfig.IJoiner => ({
  object: (v) =>
    validate_object({
      context: props.context,
      functor: props.functor,
      config: props.config,
      entries: v.entries,
      input: v.input,
    }),
  array: (props) =>
    check_everything(
      ts.factory.createCallExpression(
        IdentifierFactory.access(props.input, "map"),
        undefined,
        [props.arrow],
      ),
    ),
  failure: (next) =>
    create_report_call({
      exceptionable:
        next.explore?.from === "top"
          ? ts.factory.createTrue()
          : ts.factory.createIdentifier("_exceptionable"),
      path: ts.factory.createIdentifier(
        next.explore?.postfix ? `_path + ${next.explore.postfix}` : "_path",
      ),
      expected: next.expected,
      value: next.input,
    }),
  tuple: (binaries) =>
    check_everything(ts.factory.createArrayLiteralExpression(binaries, true)),
});

const create_output = () =>
  ts.factory.createConditionalExpression(
    ts.factory.createIdentifier("success"),
    undefined,
    ts.factory.createObjectLiteralExpression(
      [
        ts.factory.createShorthandPropertyAssignment("success"),
        ts.factory.createPropertyAssignment(
          "data",
          ts.factory.createIdentifier("input"),
        ),
      ],
      true,
    ),
    undefined,
    ts.factory.createObjectLiteralExpression(
      [
        ts.factory.createShorthandPropertyAssignment("success"),
        ts.factory.createShorthandPropertyAssignment("errors"),
        ts.factory.createPropertyAssignment(
          "data",
          ts.factory.createIdentifier("input"),
        ),
      ],
      true,
    ),
  );

const create_report_call = (props: {
  exceptionable?: ts.Expression;
  path: ts.Expression;
  expected: string;
  value: ts.Expression;
  description?: ts.Expression;
}): ts.Expression =>
  ts.factory.createCallExpression(
    ts.factory.createIdentifier("_report"),
    undefined,
    [
      props.exceptionable ?? ts.factory.createIdentifier("_exceptionable"),
      ts.factory.createObjectLiteralExpression(
        [
          ts.factory.createPropertyAssignment("path", props.path),
          ts.factory.createPropertyAssignment(
            "expected",
            ts.factory.createStringLiteral(props.expected),
          ),
          ts.factory.createPropertyAssignment("value", props.value),
          ...(props.description
            ? [
                ts.factory.createPropertyAssignment(
                  "description",
                  props.description,
                ),
              ]
            : []),
        ],
        true,
      ),
    ],
  );
