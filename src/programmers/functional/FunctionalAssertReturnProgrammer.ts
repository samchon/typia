import ts from "typescript";

import { TypeFactory } from "../../factories/TypeFactory";

import { IProject } from "../../transformers/IProject";

import { AssertProgrammer } from "../AssertProgrammer";
import { FunctionalAssertFunctionProgrammer } from "./FunctionalAssertFunctionProgrammer";

export namespace FunctionAssertReturnProgrammer {
  export const write =
    (project: IProject) =>
    (modulo: ts.LeftHandSideExpression) =>
    (equals: boolean) =>
    (
      expression: ts.Expression,
      declaration: ts.FunctionDeclaration,
      init?: ts.Expression,
    ): ts.ArrowFunction => {
      const { async, returns: statement } = returnStatement(project)(modulo)(
        equals,
      )(
        expression,
        declaration.type,
        declaration.parameters.map((p) =>
          ts.factory.createIdentifier(p.name.getText()),
        ),
      );
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
            statement,
          ],
          true,
        ),
      );
    };

  export const returnStatement =
    (project: IProject) =>
    (modulo: ts.LeftHandSideExpression) =>
    (equals: boolean) =>
    (
      expression: ts.Expression,
      typeNode: ts.TypeNode | undefined,
      argumentExpressions: ts.Expression[],
    ): {
      async: boolean;
      returns: ts.ReturnStatement;
    } => {
      const [type, async]: [ts.Type, boolean] = (() => {
        const type: ts.Type = project.checker.getTypeFromTypeNode(
          typeNode ?? TypeFactory.keyword("any"),
        );
        return type.isTypeParameter() && type.symbol.name === "Promise"
          ? [type.aliasTypeArguments![0]!, true]
          : [type, false];
      })();
      const caller: ts.CallExpression = ts.factory.createCallExpression(
        expression,
        undefined,
        argumentExpressions,
      );
      return {
        async,
        returns: ts.factory.createReturnStatement(
          ts.factory.createCallExpression(
            AssertProgrammer.write(project)(modulo)(equals)(
              type,
              undefined,
              FunctionalAssertFunctionProgrammer.hookPath("$input.return"),
            ),
            undefined,
            [async ? ts.factory.createAwaitExpression(caller) : caller],
          ),
        ),
      };
    };
}
