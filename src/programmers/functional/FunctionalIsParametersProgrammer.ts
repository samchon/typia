import ts from "typescript";

import { TypeFactory } from "../../factories/TypeFactory";

import { IProject } from "../../transformers/IProject";

import { IsProgrammer } from "../IsProgrammer";

export namespace FunctionalIsParametersProgrammer {
  export const write =
    (project: IProject) =>
    (modulo: ts.LeftHandSideExpression) =>
    (equals: boolean) =>
    (
      expression: ts.Expression,
      declaration: ts.FunctionDeclaration,
    ): ts.ArrowFunction => {
      const async: boolean = (() => {
        if (declaration.type === undefined) return false;
        const type: ts.Type = project.checker.getTypeFromTypeNode(
          declaration.type,
        );
        return type.isTypeParameter() && type.symbol.name === "Promise";
      })();
      return ts.factory.createArrowFunction(
        async
          ? [ts.factory.createModifier(ts.SyntaxKind.AsyncKeyword)]
          : undefined,
        undefined,
        declaration.parameters,
        ts.factory.createUnionTypeNode([
          declaration.type ?? TypeFactory.keyword("any"),
          ts.factory.createTypeReferenceNode("null"),
        ]),
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
