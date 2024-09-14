import ts from "typescript";

import { ExpressionFactory } from "../../factories/ExpressionFactory";
import { StatementFactory } from "../../factories/StatementFactory";
import { TypeFactory } from "../../factories/TypeFactory";

import { ITypiaContext } from "../../transformers/ITypiaContext";

import { AssertProgrammer } from "../AssertProgrammer";
import { FunctionalAssertFunctionProgrammer } from "./FunctionalAssertFunctionProgrammer";
import { FunctionalGeneralProgrammer } from "./internal/FunctionalGeneralProgrammer";

export namespace FunctionalAssertParametersProgrammer {
  export const write =
    (project: ITypiaContext) =>
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
      const { async } = FunctionalGeneralProgrammer.getReturnType(
        project.checker,
      )(declaration);
      const result = decompose(project)(modulo)(equals)(
        declaration.parameters,
        wrapper.name,
      );
      return ExpressionFactory.selfCall(
        ts.factory.createBlock(
          [
            wrapper.variable,
            ...result.functions,
            ts.factory.createReturnStatement(
              ts.factory.createArrowFunction(
                async
                  ? [ts.factory.createModifier(ts.SyntaxKind.AsyncKeyword)]
                  : undefined,
                undefined,
                declaration.parameters,
                declaration.type,
                undefined,
                ts.factory.createBlock(
                  [
                    ...result.expressions.map(
                      ts.factory.createExpressionStatement,
                    ),
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
      parameters: readonly ts.ParameterDeclaration[],
      wrapper: string,
    ): {
      functions: ts.Statement[];
      expressions: ts.Expression[];
    } => ({
      functions: parameters.map((p, i) =>
        StatementFactory.constant(
          `__assert_param_${i}`,
          AssertProgrammer.write(project)(modulo)(equals)(
            p.type
              ? project.checker.getTypeFromTypeNode(p.type)
              : project.checker.getTypeFromTypeNode(TypeFactory.keyword("any")),
            undefined,
            FunctionalAssertFunctionProgrammer.hookPath({
              wrapper,
              replacer: `$input.parameters[${i}]`,
            }),
          ),
          // undefined,
          // [ts.factory.createIdentifier(p.name.getText())],
        ),
      ),
      expressions: parameters.map((p, i) =>
        ts.factory.createCallExpression(
          ts.factory.createIdentifier(`__assert_param_${i}`),
          undefined,
          [ts.factory.createIdentifier(p.name.getText())],
        ),
      ),
    });
}
