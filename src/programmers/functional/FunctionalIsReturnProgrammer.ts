import ts from "typescript";

import { ExpressionFactory } from "../../factories/ExpressionFactory";
import { StatementFactory } from "../../factories/StatementFactory";

import { ITypiaContext } from "../../transformers/ITypiaContext";

import { StringUtil } from "../../utils/StringUtil";

import { IsProgrammer } from "../IsProgrammer";
import { FunctionalIsFunctionProgrammer } from "./FunctionalIsFunctionProgrammer";
import { FunctionalGeneralProgrammer } from "./internal/FunctionalGeneralProgrammer";

export namespace FunctionalIsReturnProgrammer {
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
                FunctionalIsFunctionProgrammer.getReturnTypeNode(
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
            "__is_return",
            IsProgrammer.write(project)(modulo)(equals)(type),
          ),
        ],
        statements: [
          StatementFactory.constant(
            name,
            async ? ts.factory.createAwaitExpression(caller) : caller,
          ),
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
