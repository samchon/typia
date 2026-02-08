import ts from "typescript";

import { ExpressionFactory } from "../../factories/ExpressionFactory";
import { StatementFactory } from "../../factories/StatementFactory";
import { TypeFactory } from "../../factories/TypeFactory";

import { ITypiaContext } from "../../transformers/ITypiaContext";

import { IsProgrammer } from "../IsProgrammer";
import { FunctionalIsFunctionProgrammer } from "./FunctionalIsFunctionProgrammer";
import { FunctionalGeneralProgrammer } from "./internal/FunctionalGeneralProgrammer";

export namespace FunctionalIsParametersProgrammer {
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
    declaration: ts.FunctionDeclaration;
  }
  export interface IDecomposeOutput {
    functions: ts.Statement[];
    statements: ts.Statement[];
  }

  export const write = (props: IProps): ts.CallExpression => {
    const { async } = FunctionalGeneralProgrammer.getReturnType({
      checker: props.context.checker,
      declaration: props.declaration,
    });
    const result = decompose(props);
    return ExpressionFactory.selfCall(
      ts.factory.createBlock(
        [
          ...result.functions,
          ts.factory.createReturnStatement(
            ts.factory.createArrowFunction(
              async
                ? [ts.factory.createModifier(ts.SyntaxKind.AsyncKeyword)]
                : undefined,
              undefined,
              props.declaration.parameters,
              FunctionalIsFunctionProgrammer.getReturnTypeNode({
                declaration: props.declaration,
                async,
              }),
              undefined,
              ts.factory.createBlock(
                [
                  ...result.statements,
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
    functions: props.declaration.parameters.map((p, i) =>
      StatementFactory.constant({
        name: `__is_param_${i}`,
        value: IsProgrammer.write({
          context: props.context,
          modulo: props.modulo,
          config: props.config,
          type: props.context.checker.getTypeFromTypeNode(
            p.type ?? TypeFactory.keyword("any"),
          ),
          init: undefined,
          name: undefined,
        }),
      }),
    ),
    statements: props.declaration.parameters
      .map((p, i) => [
        ts.factory.createIfStatement(
          ts.factory.createStrictEquality(
            ts.factory.createFalse(),
            ts.factory.createCallExpression(
              ts.factory.createIdentifier(`__is_param_${i}`),
              undefined,
              [ts.factory.createIdentifier(p.name.getText())],
            ),
          ),
          ts.factory.createReturnStatement(ts.factory.createNull()),
        ),
      ])
      .flat(),
  });
}
