import ts from "typescript";

import { ExpressionFactory } from "../../factories/ExpressionFactory";
import { StatementFactory } from "../../factories/StatementFactory";

import { ITypiaContext } from "../../transformers/ITypiaContext";

import { StringUtil } from "../../utils/StringUtil";

import { ValidateProgrammer } from "../ValidateProgrammer";
import { FunctionalValidateFunctionProgrammer } from "./FunctionalValidateFunctionProgrammer";
import { FunctionalGeneralProgrammer } from "./internal/FunctionalGeneralProgrammer";

export namespace FunctionalValidateReturnProgrammer {
  export const write =
    (project: ITypiaContext) =>
    (modulo: ts.LeftHandSideExpression) =>
    (equals: boolean) =>
    (
      expression: ts.Expression,
      declaration: ts.FunctionDeclaration,
    ): ts.CallExpression => {
      const result = decompose(project)(modulo)(equals)(
        expression,
        declaration,
      );
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
                declaration.parameters,
                FunctionalValidateFunctionProgrammer.getReturnTypeNode(
                  declaration,
                  result.async,
                ),
                undefined,
                ts.factory.createBlock(result.statements, true),
              ),
            ),
          ],
          true,
        ),
      );
    };

  export const decompose =
    (project: ITypiaContext) =>
    (modulo: ts.LeftHandSideExpression) =>
    (equals: boolean) =>
    (
      expression: ts.Expression,
      declaration: ts.FunctionDeclaration,
    ): {
      async: boolean;
      functions: ts.Statement[];
      statements: ts.Statement[];
    } => {
      const { type, async } = FunctionalGeneralProgrammer.getReturnType(
        project.checker,
      )(declaration);
      const caller: ts.CallExpression = ts.factory.createCallExpression(
        expression,
        undefined,
        declaration.parameters.map((p) =>
          ts.factory.createIdentifier(p.name.getText()),
        ),
      );

      const name: string = StringUtil.escapeDuplicate(
        declaration.parameters.map((p) => p.name.getText()),
      )("result");
      return {
        async,
        functions: [
          StatementFactory.constant(
            "__validate_return",
            ValidateProgrammer.write(project)(modulo)(equals)(type),
          ),
        ],
        statements: [
          StatementFactory.constant(
            name,
            ts.factory.createCallExpression(
              ts.factory.createIdentifier("__validate_return"),
              undefined,
              [async ? ts.factory.createAwaitExpression(caller) : caller],
            ),
          ),
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
          ts.factory.createReturnStatement(
            ts.factory.createIdentifier("result"),
          ),
        ],
      };
    };
}
