import ts from "typescript";

import { ExpressionFactory } from "../../factories/ExpressionFactory";
import { IdentifierFactory } from "../../factories/IdentifierFactory";
import { TypeFactory } from "../../factories/TypeFactory";

import { ITypiaContext } from "../../transformers/ITypiaContext";

import { StringUtil } from "../../utils/StringUtil";

import { AssertProgrammer } from "../AssertProgrammer";
import { FunctionalAssertParametersProgrammer } from "./FunctionalAssertParametersProgrammer";
import { FunctionAssertReturnProgrammer } from "./FunctionalAssertReturnProgrammer";

export namespace FunctionalAssertFunctionProgrammer {
  export const write =
    (project: ITypiaContext) =>
    (modulo: ts.LeftHandSideExpression) =>
    (equals: boolean) =>
    (
      expression: ts.Expression,
      declaration: ts.FunctionDeclaration,
      init?: ts.Expression,
    ): ts.CallExpression => {
      const wrapper = errorFactoryWrapper(modulo)(declaration.parameters)(init);
      const p = FunctionalAssertParametersProgrammer.decompose(project)(modulo)(
        equals,
      )(declaration.parameters, wrapper.name);
      const r = FunctionAssertReturnProgrammer.decompose(project)(modulo)(
        equals,
      )(expression, declaration, wrapper.name);
      return ExpressionFactory.selfCall(
        ts.factory.createBlock(
          [
            wrapper.variable,
            ...p.functions,
            ...r.functions,
            ts.factory.createReturnStatement(
              ts.factory.createArrowFunction(
                r.async
                  ? [ts.factory.createModifier(ts.SyntaxKind.AsyncKeyword)]
                  : undefined,
                undefined,
                declaration.parameters,
                declaration.type,
                undefined,
                ts.factory.createBlock([
                  ...p.expressions.map(ts.factory.createExpressionStatement),
                  ts.factory.createReturnStatement(r.value),
                ]),
              ),
            ),
          ],
          true,
        ),
      );
    };

  export const errorFactoryWrapper =
    (modulo: ts.LeftHandSideExpression) =>
    (paramters: readonly ts.ParameterDeclaration[]) =>
    (
      init: ts.Expression | undefined,
    ): {
      name: string;
      variable: ts.VariableStatement;
    } => {
      const name: string = StringUtil.escapeDuplicate(
        paramters.map((p) => p.name.getText()),
      )("errorFactoryWrapper");
      const variable: ts.VariableStatement = ts.factory.createVariableStatement(
        undefined,
        ts.factory.createVariableDeclarationList(
          [
            ts.factory.createVariableDeclaration(
              name,
              undefined,
              AssertProgrammer.Guardian.type(),
              init ??
                ts.factory.createPropertyAccessExpression(
                  ts.factory.createAsExpression(
                    modulo,
                    TypeFactory.keyword("any"),
                  ),
                  "errorFactory",
                ),
            ),
          ],
          ts.NodeFlags.Const,
        ),
      );
      return { name, variable };
    };

  export const hookPath = (props: {
    wrapper: string;
    replacer: string;
  }): ts.ArrowFunction =>
    ts.factory.createArrowFunction(
      undefined,
      undefined,
      [IdentifierFactory.parameter("p")],
      undefined,
      undefined,
      ts.factory.createCallExpression(
        ts.factory.createIdentifier(props.wrapper),
        undefined,
        [
          ts.factory.createObjectLiteralExpression([
            ts.factory.createSpreadAssignment(ts.factory.createIdentifier("p")),
            ts.factory.createPropertyAssignment(
              "path",
              ts.factory.createConditionalExpression(
                ts.factory.createPropertyAccessExpression(
                  ts.factory.createIdentifier("p"),
                  "path",
                ),
                undefined,
                ts.factory.createCallExpression(
                  ts.factory.createPropertyAccessExpression(
                    ts.factory.createPropertyAccessExpression(
                      ts.factory.createIdentifier("p"),
                      "path",
                    ),
                    "replace",
                  ),
                  undefined,
                  [
                    ts.factory.createStringLiteral("$input"),
                    ts.factory.createStringLiteral(props.replacer),
                  ],
                ),
                undefined,
                ts.factory.createIdentifier("undefined"),
              ),
            ),
          ]),
        ],
      ),
    );
}
