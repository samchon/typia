import ts from "typescript";

import { TypeFactory } from "../../factories/TypeFactory";

import { IProject } from "../../transformers/IProject";

import { AssertProgrammer } from "../AssertProgrammer";
import { FunctionalAssertFunctionProgrammer } from "./FunctionalAssertFunctionProgrammer";

export namespace FunctionalAssertParametersProgrammer {
  export const write =
    (project: IProject) =>
    (modulo: ts.LeftHandSideExpression) =>
    (equals: boolean) =>
    (
      expression: ts.Expression,
      declaration: ts.FunctionDeclaration,
      init?: ts.Expression,
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
        declaration.type,
        undefined,
        ts.factory.createBlock(
          [
            FunctionalAssertFunctionProgrammer.errorFactory(modulo)(init),
            ...argumentExpressions(project)(modulo)(equals)(
              declaration.parameters,
            ).map(ts.factory.createExpressionStatement),
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

  export const argumentExpressions =
    (project: IProject) =>
    (modulo: ts.LeftHandSideExpression) =>
    (equals: boolean) =>
    (parameters: readonly ts.ParameterDeclaration[]): ts.CallExpression[] =>
      parameters.map((p, i) =>
        ts.factory.createCallExpression(
          AssertProgrammer.write(project)(modulo)(equals)(
            p.type
              ? project.checker.getTypeFromTypeNode(p.type)
              : project.checker.getTypeFromTypeNode(TypeFactory.keyword("any")),
            undefined,
            FunctionalAssertFunctionProgrammer.hookPath(
              `$input.parameters[${i}]`,
            ),
          ),
          undefined,
          [ts.factory.createIdentifier(p.name.getText())],
        ),
      );
}
