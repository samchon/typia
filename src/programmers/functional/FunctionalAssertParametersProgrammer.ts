import ts from "typescript";
import { IProject } from "../../transformers/IProject";
import { StatementFactory } from "../../factories/StatementFactory";
import { AssertProgrammer } from "../AssertProgrammer";

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
      const { assert, call } = prepare(project)(modulo)(equals)(
        declaration,
        init,
      );
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
            assert,
            call,
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

  export const prepare =
    (project: IProject) =>
    (modulo: ts.LeftHandSideExpression) =>
    (equals: boolean) =>
    (declaration: ts.FunctionDeclaration, init?: ts.Expression) => {
      const typeNode: ts.TypeNode = ts.factory.createTypeLiteralNode([
        ts.factory.createPropertySignature(
          undefined,
          "parameters",
          undefined,
          ts.factory.createTupleTypeNode(
            declaration.parameters.map((p) => p.type!),
          ),
        ),
      ]);
      const type: ts.Type = project.checker.getTypeFromTypeNode(typeNode);

      const assert = StatementFactory.constant(
        "assert",
        AssertProgrammer.write(project)(modulo)(equals)(type, undefined, init),
      );
      const call = ts.factory.createExpressionStatement(
        ts.factory.createCallExpression(
          ts.factory.createIdentifier("assert"),
          undefined,
          [
            ts.factory.createObjectLiteralExpression(
              [
                ts.factory.createPropertyAssignment(
                  "parameters",
                  ts.factory.createArrayLiteralExpression(
                    declaration.parameters.map((p) =>
                      ts.factory.createIdentifier(p.name.getText()),
                    ),
                  ),
                ),
              ],
              true,
            ),
          ],
        ),
      );
      return { assert, call, type };
    };
}
