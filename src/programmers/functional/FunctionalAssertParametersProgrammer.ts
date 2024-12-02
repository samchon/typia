import ts from "typescript";

import { ExpressionFactory } from "../../factories/ExpressionFactory";
import { StatementFactory } from "../../factories/StatementFactory";
import { TypeFactory } from "../../factories/TypeFactory";

import { ITypiaContext } from "../../transformers/ITypiaContext";

import { AssertProgrammer } from "../AssertProgrammer";
import { FunctionalAssertFunctionProgrammer } from "./FunctionalAssertFunctionProgrammer";
import { FunctionalGeneralProgrammer } from "./internal/FunctionalGeneralProgrammer";

export namespace FunctionalAssertParametersProgrammer {
  export interface IConfig {
    equals: boolean;
  }
  export interface IProps {
    context: ITypiaContext;
    modulo: ts.LeftHandSideExpression;
    config: IConfig;
    declaration: ts.FunctionDeclaration;
    expression: ts.Expression;
    init?: ts.Expression | undefined;
  }
  export interface IDecomposeProps {
    context: ITypiaContext;
    config: IConfig;
    modulo: ts.LeftHandSideExpression;
    parameters: readonly ts.ParameterDeclaration[];
    wrapper: string;
  }
  export interface IDecomposeOutput {
    functions: ts.Statement[];
    expressions: ts.Expression[];
  }

  export const write = (props: IProps): ts.CallExpression => {
    const wrapper = FunctionalAssertFunctionProgrammer.errorFactoryWrapper({
      context: props.context,
      parameters: props.declaration.parameters,
      init: props.init,
    });
    const { async } = FunctionalGeneralProgrammer.getReturnType({
      checker: props.context.checker,
      declaration: props.declaration,
    });
    const result = decompose({
      context: props.context,
      modulo: props.modulo,
      config: props.config,
      parameters: props.declaration.parameters,
      wrapper: wrapper.name,
    });
    return ExpressionFactory.selfCall(
      ts.factory.createBlock(
        [
          wrapper.variable,
          ...result.functions,
          ts.factory.createReturnStatement(
            ts.factory.createArrowFunction(
              async
                ? [ts.factory.createModifier(ts.SyntaxKind.AsyncKeyword)]
                : undefined,
              undefined,
              props.declaration.parameters,
              props.declaration.type,
              undefined,
              ts.factory.createBlock(
                [
                  ...result.expressions.map(
                    ts.factory.createExpressionStatement,
                  ),
                  ts.factory.createReturnStatement(
                    ts.factory.createCallExpression(
                      props.expression,
                      undefined,
                      props.declaration.parameters.map((p) =>
                        ts.factory.createIdentifier(p.name.getText()),
                      ),
                    ),
                  ),
                ],
                true,
              ),
            ),
          ),
        ],
        true,
      ),
    );
  };

  export const decompose = (props: IDecomposeProps): IDecomposeOutput => ({
    functions: props.parameters.map((p, i) =>
      StatementFactory.constant({
        name: `__assert_param_${i}`,
        value: AssertProgrammer.write({
          context: props.context,
          modulo: props.modulo,
          config: {
            equals: props.config.equals,
            guard: false,
          },
          type: p.type
            ? props.context.checker.getTypeFromTypeNode(p.type)
            : props.context.checker.getTypeFromTypeNode(
                TypeFactory.keyword("any"),
              ),
          name: undefined,
          init: FunctionalAssertFunctionProgrammer.hookPath({
            wrapper: props.wrapper,
            replacer: `$input.parameters[${i}]`,
          }),
        }),
      }),
    ),
    expressions: props.parameters.map((p, i) =>
      ts.factory.createCallExpression(
        ts.factory.createIdentifier(`__assert_param_${i}`),
        undefined,
        [ts.factory.createIdentifier(p.name.getText())],
      ),
    ),
  });
}
