import ts from "typescript";
import { IProject } from "../../transformers/IProject";
import { StatementFactory } from "../../factories/StatementFactory";
import { AssertProgrammer } from "../AssertProgrammer";

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
      const { async, assert, variable, call, returns } = prepare(project)(
        modulo,
      )(equals)(expression, declaration, init);
      return ts.factory.createArrowFunction(
        async
          ? [ts.factory.createModifier(ts.SyntaxKind.AsyncKeyword)]
          : undefined,
        undefined,
        declaration.parameters,
        declaration.type,
        undefined,
        ts.factory.createBlock([assert, variable, call, returns], true),
      );
    };

  export const prepare =
    (project: IProject) =>
    (modulo: ts.LeftHandSideExpression) =>
    (equals: boolean) =>
    (
      expression: ts.Expression,
      declaration: ts.FunctionDeclaration,
      init?: ts.Expression,
    ) => {
      const [type, async]: [ts.Type, boolean] = (() => {
        const type: ts.Type = project.checker.getTypeFromTypeNode(
          declaration.type!,
        );
        return type.isTypeParameter() && type.symbol.name === "Promise"
          ? [type.aliasTypeArguments![0]!, true]
          : [type, false];
      })();
      const assert = StatementFactory.constant(
        "assert",
        AssertProgrammer.write(project)(modulo)(equals)(type, undefined, init),
      );
      const funcCaller = ts.factory.createCallExpression(
        expression,
        undefined,
        declaration.parameters.map((p) =>
          ts.factory.createIdentifier(p.name.getText()),
        ),
      );
      const variable = StatementFactory.constant(
        "output",
        async ? ts.factory.createAwaitExpression(funcCaller) : funcCaller,
      );

      const call = ts.factory.createExpressionStatement(
        ts.factory.createCallExpression(
          ts.factory.createIdentifier("assert"),
          undefined,
          [
            ts.factory.createObjectLiteralExpression([
              ts.factory.createPropertyAssignment(
                "return",
                ts.factory.createIdentifier("output"),
              ),
            ]),
          ],
        ),
      );
      const returns = ts.factory.createReturnStatement(
        ts.factory.createIdentifier("output"),
      );
      return { async, type, assert, variable, call, returns };
    };
}
