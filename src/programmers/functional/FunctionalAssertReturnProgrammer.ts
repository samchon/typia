import ts from "typescript";

import { ExpressionFactory } from "../../factories/ExpressionFactory";
import { StatementFactory } from "../../factories/StatementFactory";

import { ITypiaContext } from "../../transformers/ITypiaContext";

import { AssertProgrammer } from "../AssertProgrammer";
import { FunctionalAssertFunctionProgrammer } from "./FunctionalAssertFunctionProgrammer";
import { FunctionalGeneralProgrammer } from "./internal/FunctionalGeneralProgrammer";

export namespace FunctionAssertReturnProgrammer {
  export interface IConfig {
    equals: boolean;
  }
  export interface IProps {
    context: ITypiaContext;
    modulo: ts.LeftHandSideExpression;
    config: IConfig;
    expression: ts.Expression;
    declaration: ts.FunctionDeclaration;
    init?: ts.Expression | undefined;
  }
  export interface IDecomposeProps {
    context: ITypiaContext;
    modulo: ts.LeftHandSideExpression;
    config: IConfig;
    expression: ts.Expression;
    declaration: ts.FunctionDeclaration;
    wrapper: string;
  }
  export interface IDecomposeOutput {
    async: boolean;
    functions: ts.Statement[];
    value: ts.Expression;
  }

  export const write = (props: IProps): ts.CallExpression => {
    const wrapper = FunctionalAssertFunctionProgrammer.errorFactoryWrapper({
      context: props.context,
      parameters: props.declaration.parameters,
      init: props.init,
    });
    const result = decompose({
      context: props.context,
      modulo: props.modulo,
      config: props.config,
      expression: props.expression,
      declaration: props.declaration,
      wrapper: wrapper.name,
    });
    return ExpressionFactory.selfCall(
      ts.factory.createBlock(
        [
          wrapper.variable,
          ...result.functions,
          ts.factory.createReturnStatement(
            ts.factory.createArrowFunction(
              result.async
                ? [ts.factory.createModifier(ts.SyntaxKind.AsyncKeyword)]
                : undefined,
              undefined,
              props.declaration.parameters,
              props.declaration.type,
              undefined,
              result.value,
            ),
          ),
        ],
        true,
      ),
    );
  };

  export const decompose = (props: IDecomposeProps): IDecomposeOutput => {
    const { type, async } = FunctionalGeneralProgrammer.getReturnType({
      checker: props.context.checker,
      declaration: props.declaration,
    });
    const caller: ts.CallExpression = ts.factory.createCallExpression(
      props.expression,
      undefined,
      props.declaration.parameters.map((p) =>
        ts.factory.createIdentifier(p.name.getText()),
      ),
    );
    return {
      async,
      functions: [
        StatementFactory.constant({
          name: "__assert_return",
          value: AssertProgrammer.write({
            context: props.context,
            modulo: props.modulo,
            config: {
              equals: props.config.equals,
              guard: false,
            },
            type,
            name: undefined,
            init: FunctionalAssertFunctionProgrammer.hookPath({
              wrapper: props.wrapper,
              replacer: "$input.return",
            }),
          }),
        }),
      ],
      value: ts.factory.createCallExpression(
        ts.factory.createIdentifier("__assert_return"),
        undefined,
        [async ? ts.factory.createAwaitExpression(caller) : caller],
      ),
    };
  };
}
