import ts from "typescript";

import { ExpressionFactory } from "../../factories/ExpressionFactory";
import { StatementFactory } from "../../factories/StatementFactory";

import { ITypiaContext } from "../../transformers/ITypiaContext";

import { StringUtil } from "../../utils/StringUtil";

import { ValidateProgrammer } from "../ValidateProgrammer";
import { FunctionalValidateFunctionProgrammer } from "./FunctionalValidateFunctionProgrammer";
import { FunctionalGeneralProgrammer } from "./internal/FunctionalGeneralProgrammer";

export namespace FunctionalValidateReturnProgrammer {
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
              FunctionalValidateFunctionProgrammer.getReturnTypeNode({
                context: props.context,
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
          name: "__validate_return",
          value: ValidateProgrammer.write({
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
          value: ts.factory.createCallExpression(
            ts.factory.createIdentifier("__validate_return"),
            undefined,
            [async ? ts.factory.createAwaitExpression(caller) : caller],
          ),
        }),
        ts.factory.createIfStatement(
          ts.factory.createStrictEquality(
            ts.factory.createFalse(),
            ts.factory.createPropertyAccessExpression(
              ts.factory.createIdentifier(name),
              ts.factory.createIdentifier("success"),
            ),
          ),
          ts.factory.createExpressionStatement(
            ts.factory.createBinaryExpression(
              ts.factory.createPropertyAccessExpression(
                ts.factory.createIdentifier(name),
                ts.factory.createIdentifier("errors"),
              ),
              ts.factory.createToken(ts.SyntaxKind.EqualsToken),
              FunctionalValidateFunctionProgrammer.hookErrors({
                expression: ts.factory.createPropertyAccessExpression(
                  ts.factory.createIdentifier(name),
                  ts.factory.createIdentifier("errors"),
                ),
                replacer: ts.factory.createStringLiteral("$input.return"),
              }),
            ),
          ),
        ),
        ts.factory.createReturnStatement(ts.factory.createIdentifier("result")),
      ],
    };
  };
}
