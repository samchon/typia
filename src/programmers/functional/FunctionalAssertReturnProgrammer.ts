import ts from "typescript";

import { IProject } from "../../transformers/IProject";

import { AssertProgrammer } from "../AssertProgrammer";
import { FunctionalAssertFunctionProgrammer } from "./FunctionalAssertFunctionProgrammer";
import { FunctionalGeneralProgrammer } from "./internal/FunctionalGeneralProgrammer";

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
      const wrapper = FunctionalAssertFunctionProgrammer.errorFactoryWrapper(
        modulo,
      )(declaration.parameters)(init);
      const { async, returns: statement } = returnStatement(project)(modulo)(
        equals,
      )(expression, declaration, wrapper.name);
      return ts.factory.createArrowFunction(
        async
          ? [ts.factory.createModifier(ts.SyntaxKind.AsyncKeyword)]
          : undefined,
        undefined,
        declaration.parameters,
        declaration.type,
        undefined,
        ts.factory.createBlock([wrapper.variable, statement], true),
      );
    };

  export const returnStatement =
    (project: IProject) =>
    (modulo: ts.LeftHandSideExpression) =>
    (equals: boolean) =>
    (
      expression: ts.Expression,
      declaration: ts.FunctionDeclaration,
      wrapper: string,
    ): {
      async: boolean;
      returns: ts.ReturnStatement;
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
      return {
        async,
        returns: ts.factory.createReturnStatement(
          ts.factory.createCallExpression(
            AssertProgrammer.write(project)(modulo)(equals)(
              type,
              undefined,
              FunctionalAssertFunctionProgrammer.hookPath({
                wrapper,
                replacer: "$input.return",
              }),
            ),
            undefined,
            [async ? ts.factory.createAwaitExpression(caller) : caller],
          ),
        ),
      };
    };
}
