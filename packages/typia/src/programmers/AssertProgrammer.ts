import ts from "typescript";

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
    config: IConfig;
    context: ITypiaContext;
    functor: FunctionProgrammer;
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
        prefix: "_a",
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
                      create_guard_call({
                        context: props.context,
                        functor: props.functor,
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
                        input: next.input,
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
                      create_guard_call({
                        context: props.context,
                        functor: props.functor,
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
                        input: next.input,
                      }),
                    ),
                  ]),
          ].reduce((x, y) => ts.factory.createLogicalAnd(x, y)),
        combiner: combiner(props),
        joiner: joiner(props),
        success: ts.factory.createTrue(),
      },
    });
    const arrow: ts.ArrowFunction = ts.factory.createArrowFunction(
      undefined,
      undefined,
      [
        IdentifierFactory.parameter("input", TypeFactory.keyword("any")),
        Guardian.parameter({
          context: props.context,
          init: props.init,
        }),
      ],
      props.config.guard
        ? ts.factory.createTypePredicateNode(
            ts.factory.createToken(ts.SyntaxKind.AssertsKeyword),
            ts.factory.createIdentifier("input"),
            ts.factory.createTypeReferenceNode(
              props.name ??
                TypeFactory.getFullName({
                  checker: props.context.checker,
                  type: props.type,
                }),
            ),
          )
        : ts.factory.createTypeReferenceNode(
            props.name ??
              TypeFactory.getFullName({
                checker: props.context.checker,
                type: props.type,
              }),
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
        StatementFactory.constant({
          name: "__is",
          value: is.arrow,
        }),
        StatementFactory.mut({
          name: "_errorFactory",
        }),
      ],
      arrow,
    };
  };

  export const write = (props: IProps): ts.CallExpression => {
    const functor: FunctionProgrammer = new FunctionProgrammer(
      props.modulo.getText(),
    );
    const result: FeatureProgrammer.IDecomposed = decompose({
      ...props,
      functor,
    });
    return FeatureProgrammer.writeDecomposed({
      modulo: props.modulo,
      functor,
      result,
    });
  };

  const combiner =
    (props: {
      config: IConfig;
      context: ITypiaContext;
      functor: FunctionProgrammer;
    }): CheckerProgrammer.IConfig.Combiner =>
    (next) => {
      if (next.explore.tracable === false)
        return IsProgrammer.configure({
          options: {
            object: (v) =>
              assert_object({
                config: props.config,
                context: props.context,
                functor: props.functor,
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
                    create_guard_call({
                      context: props.context,
                      functor: props.functor,
                      exceptionable:
                        next.explore.source === "top"
                          ? ts.factory.createTrue()
                          : ts.factory.createIdentifier("_exceptionable"),
                      path: ts.factory.createIdentifier(path),
                      expected: next.expected,
                      input: next.input,
                    }),
                  ),
            )
            .reduce(ts.factory.createLogicalAnd)
        : ts.factory.createLogicalOr(
            next.binaries
              .map((binary) => binary.expression)
              .reduce(ts.factory.createLogicalOr),
            create_guard_call({
              context: props.context,
              functor: props.functor,
              exceptionable:
                next.explore.source === "top"
                  ? ts.factory.createTrue()
                  : ts.factory.createIdentifier("_exceptionable"),
              path: ts.factory.createIdentifier(path),
              expected: next.expected,
              input: next.input,
            }),
          );
    };

  const assert_object = (props: {
    config: IConfig;
    context: ITypiaContext;
    functor: FunctionProgrammer;
    entries: IExpressionEntry<ts.Expression>[];
    input: ts.Expression;
  }) =>
    check_object({
      config: {
        equals: props.config.equals,
        assert: true,
        undefined: true,
        reduce: ts.factory.createLogicalAnd,
        positive: ts.factory.createTrue(),
        superfluous: (input) =>
          create_guard_call({
            context: props.context,
            functor: props.functor,
            path: ts.factory.createAdd(
              ts.factory.createIdentifier("_path"),
              ts.factory.createCallExpression(
                props.context.importer.internal("accessExpressionAsString"),
                undefined,
                [ts.factory.createIdentifier("key")],
              ),
            ),
            expected: "undefined",
            input,
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
    config: IConfig;
    context: ITypiaContext;
    functor: FunctionProgrammer;
  }): CheckerProgrammer.IConfig.IJoiner => ({
    object: (next) =>
      assert_object({
        config: props.config,
        context: props.context,
        functor: props.functor,
        entries: next.entries,
        input: next.input,
      }),
    array: (props) =>
      ts.factory.createCallExpression(
        IdentifierFactory.access(props.input, "every"),
        undefined,
        [props.arrow],
      ),
    failure: (next) =>
      create_guard_call({
        context: props.context,
        functor: props.functor,
        exceptionable:
          next.explore?.from === "top"
            ? ts.factory.createTrue()
            : ts.factory.createIdentifier("_exceptionable"),
        path: ts.factory.createIdentifier(
          next.explore?.postfix ? `_path + ${next.explore.postfix}` : "_path",
        ),
        expected: next.expected,
        input: next.input,
      }),
    full: props.config.equals
      ? undefined
      : (next) =>
          ts.factory.createLogicalOr(
            next.condition,
            create_guard_call({
              context: props.context,
              functor: props.functor,
              exceptionable:
                next.explore.from === "top"
                  ? ts.factory.createTrue()
                  : ts.factory.createIdentifier("_exceptionable"),
              path: ts.factory.createIdentifier("_path"),
              expected: next.expected,
              input: next.input,
            }),
          ),
  });

  const create_guard_call = (props: {
    context: ITypiaContext;
    functor: FunctionProgrammer;
    expected: string;
    input: ts.Expression;
    path: ts.Expression;
    exceptionable?: ts.Expression;
  }): ts.Expression =>
    ts.factory.createCallExpression(
      props.context.importer.internal("assertGuard"),
      undefined,
      [
        props.exceptionable ?? ts.factory.createIdentifier("_exceptionable"),
        ts.factory.createObjectLiteralExpression(
          [
            ts.factory.createPropertyAssignment(
              "method",
              ts.factory.createStringLiteral(props.functor.method),
            ),
            ts.factory.createPropertyAssignment("path", props.path),
            ts.factory.createPropertyAssignment(
              "expected",
              ts.factory.createStringLiteral(props.expected),
            ),
            ts.factory.createPropertyAssignment("value", props.input),
          ],
          true,
        ),
        ts.factory.createIdentifier("_errorFactory"),
      ],
    );

  export namespace Guardian {
    export const identifier = () => ts.factory.createIdentifier("errorFactory");
    export const parameter = (props: {
      context: ITypiaContext;
      init: ts.Expression | undefined;
    }) =>
      IdentifierFactory.parameter(
        "errorFactory",
        type(props.context),
        props.init ?? ts.factory.createToken(ts.SyntaxKind.QuestionToken),
      );
    export const type = (context: ITypiaContext) =>
      ts.factory.createFunctionTypeNode(
        undefined,
        [
          ts.factory.createParameterDeclaration(
            undefined,
            undefined,
            ts.factory.createIdentifier("p"),
            undefined,
            context.importer.type({
              file: "typia",
              name: "TypeGuardError.IProps",
            }),
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
