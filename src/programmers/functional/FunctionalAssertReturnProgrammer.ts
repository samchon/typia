import ts from "typescript";

import { ExpressionFactory } from "../../factories/ExpressionFactory";
import { StatementFactory } from "../../factories/StatementFactory";

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
    ): ts.CallExpression => {
      const wrapper = FunctionalAssertFunctionProgrammer.errorFactoryWrapper(
        modulo,
      )(declaration.parameters)(init);
      const result = decompose(project)(modulo)(equals)(
        expression,
        declaration,
        wrapper.name,
      );
      return ExpressionFactory.selfCall(
        ts.factory.createBlock(
          [
            wrapper.variable,
            ...result.functions,
            ts.factory.createReturnStatement(
              ts.factory.createArrowFunction(
                result.async
                  ? [ts.factory.createModifier(ts.SyntaxKind.AsyncKeyword)]
                  : undefined,
                undefined,
                declaration.parameters,
                declaration.type,
                undefined,
                result.value,
              ),
            ),
          ],
          true,
        ),
      );
    };

  export const decompose =
    (project: IProject) =>
    (modulo: ts.LeftHandSideExpression) =>
    (equals: boolean) =>
    (
      expression: ts.Expression,
      declaration: ts.FunctionDeclaration,
      wrapper: string,
    ): {
      async: boolean;
      functions: ts.Statement[];
      value: ts.Expression;
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
        functions: [
          StatementFactory.constant(
            "__assert_return",
            AssertProgrammer.write(project)(modulo)(equals)(
              type,
              undefined,
              FunctionalAssertFunctionProgrammer.hookPath({
                wrapper,
                replacer: "$input.return",
              }),
            ),
          ),
        ],
        value: ts.factory.createCallExpression(
          ts.factory.createIdentifier("__assert_return"),
          undefined,
          [async ? ts.factory.createAwaitExpression(caller) : caller],
        ),
      };
    };
}
