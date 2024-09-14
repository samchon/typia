import ts from "typescript";

import { ExpressionFactory } from "../../factories/ExpressionFactory";
import { StatementFactory } from "../../factories/StatementFactory";
import { TypeFactory } from "../../factories/TypeFactory";

import { ITypiaContext } from "../../transformers/ITypiaContext";

import { IsProgrammer } from "../IsProgrammer";
import { FunctionalIsFunctionProgrammer } from "./FunctionalIsFunctionProgrammer";
import { FunctionalGeneralProgrammer } from "./internal/FunctionalGeneralProgrammer";

export namespace FunctionalIsParametersProgrammer {
  export const write =
    (project: ITypiaContext) =>
    (modulo: ts.LeftHandSideExpression) =>
    (equals: boolean) =>
    (
      expression: ts.Expression,
      declaration: ts.FunctionDeclaration,
    ): ts.CallExpression => {
      const { async } = FunctionalGeneralProgrammer.getReturnType(
        project.checker,
      )(declaration);
      const result = decompose(project)(modulo)(equals)(declaration);
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
                declaration.parameters,
                FunctionalIsFunctionProgrammer.getReturnTypeNode(
                  declaration,
                  async,
                ),
                undefined,
                ts.factory.createBlock(
                  [
                    ...result.statements,
                    ts.factory.createReturnStatement(
                      ts.factory.createCallExpression(
                        expression,
                        undefined,
                        declaration.parameters.map((p) =>
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

  export const decompose =
    (project: ITypiaContext) =>
    (modulo: ts.LeftHandSideExpression) =>
    (equals: boolean) =>
    (
      declaration: ts.FunctionDeclaration,
    ): {
      functions: ts.Statement[];
      statements: ts.Statement[];
    } => ({
      functions: declaration.parameters.map((p, i) =>
        StatementFactory.constant(
          `__is_param_${i}`,
          IsProgrammer.write(project)(modulo)(equals)(
            project.checker.getTypeFromTypeNode(
              p.type ?? TypeFactory.keyword("any"),
            ),
          ),
        ),
      ),
      statements: declaration.parameters
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
