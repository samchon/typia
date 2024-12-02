import ts from "typescript";

import { ExpressionFactory } from "../../factories/ExpressionFactory";
import { StatementFactory } from "../../factories/StatementFactory";

import { ITypiaContext } from "../../transformers/ITypiaContext";

import { StringUtil } from "../../utils/StringUtil";

import { IsProgrammer } from "../IsProgrammer";
import { FunctionalIsFunctionProgrammer } from "./FunctionalIsFunctionProgrammer";
import { FunctionalGeneralProgrammer } from "./internal/FunctionalGeneralProgrammer";

export namespace FunctionalIsReturnProgrammer {
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
    modulo: ts.LeftHandSideExpression;
    config: IConfig;
    expression: ts.Expression;
    declaration: ts.FunctionDeclaration;
  }
  export interface IDecomposeOutput {
    async: boolean;
    functions: ts.Statement[];
    statements: ts.Statement[];
  }

  export const write = (props: IProps): ts.CallExpression => {
    const result = decompose(props);
    return ExpressionFactory.selfCall(
      ts.factory.createBlock(
        [
          ...result.functions,
          ts.factory.createReturnStatement(
            ts.factory.createArrowFunction(
              result.async
                ? [ts.factory.createModifier(ts.SyntaxKind.AsyncKeyword)]
                : undefined,
              undefined,
              props.declaration.parameters,
              FunctionalIsFunctionProgrammer.getReturnTypeNode({
                declaration: props.declaration,
                async: result.async,
              }),
              undefined,
              ts.factory.createBlock(result.statements, true),
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
    const name: string = StringUtil.escapeDuplicate({
      keep: props.declaration.parameters.map((p) => p.name.getText()),
      input: "result",
    });
    return {
      async,
      functions: [
        StatementFactory.constant({
          name: "__is_return",
          value: IsProgrammer.write({
            ...props,
            type,
            name: undefined,
            init: undefined,
          }),
        }),
      ],
      statements: [
        StatementFactory.constant({
          name,
          value: async ? ts.factory.createAwaitExpression(caller) : caller,
        }),
        ts.factory.createReturnStatement(
          ts.factory.createConditionalExpression(
            ts.factory.createCallExpression(
              ts.factory.createIdentifier("__is_return"),
              undefined,
              [ts.factory.createIdentifier(name)],
            ),
            undefined,
            ts.factory.createIdentifier(name),
            undefined,
            ts.factory.createNull(),
          ),
        ),
      ],
    };
  };
}
