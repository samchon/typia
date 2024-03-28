import ts from "typescript";

import { TypeFactory } from "../../factories/TypeFactory";

import { IProject } from "../../transformers/IProject";

import { IsProgrammer } from "../IsProgrammer";
import { FunctionalIsFunctionProgrammer } from "./FunctionalIsFunctionProgrammer";
import { FunctionalGeneralProgrammer } from "./internal/FunctionalGeneralProgrammer";

export namespace FunctionalIsParametersProgrammer {
  export const write =
    (project: IProject) =>
    (modulo: ts.LeftHandSideExpression) =>
    (equals: boolean) =>
    (
      expression: ts.Expression,
      declaration: ts.FunctionDeclaration,
    ): ts.ArrowFunction => {
      const { async } = FunctionalGeneralProgrammer.getReturnType(
        project.checker,
      )(declaration);
      return ts.factory.createArrowFunction(
        async
          ? [ts.factory.createModifier(ts.SyntaxKind.AsyncKeyword)]
          : undefined,
        undefined,
        declaration.parameters,
        FunctionalIsFunctionProgrammer.getReturnTypeNode(declaration, async),
        undefined,
        ts.factory.createBlock(
          [
            ...writeStatements(project)(modulo)(equals)(declaration),
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
      );
    };

  export const writeStatements =
    (project: IProject) =>
    (modulo: ts.LeftHandSideExpression) =>
    (equals: boolean) =>
    (declaration: ts.FunctionDeclaration): ts.Statement[] =>
      declaration.parameters
        .map((p) => [
          ts.factory.createIfStatement(
            ts.factory.createStrictEquality(
              ts.factory.createFalse(),
              ts.factory.createCallExpression(
                IsProgrammer.write(project)(modulo)(equals)(
                  project.checker.getTypeFromTypeNode(
                    p.type ?? TypeFactory.keyword("any"),
                  ),
                ),
                undefined,
                [ts.factory.createIdentifier(p.name.getText())],
              ),
            ),
            ts.factory.createReturnStatement(ts.factory.createNull()),
          ),
        ])
        .flat();
}
