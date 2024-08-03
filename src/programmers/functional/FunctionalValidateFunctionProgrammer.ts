import ts from "typescript";

import { ExpressionFactory } from "../../factories/ExpressionFactory";
import { IdentifierFactory } from "../../factories/IdentifierFactory";

import { IProject } from "../../transformers/IProject";

import { FunctionalValidateParametersProgrammer } from "./FunctionalValidateParametersProgrammer";
import { FunctionalValidateReturnProgrammer } from "./FunctionalValidateReturnProgrammer";

export namespace FunctionalValidateFunctionProgrammer {
  export const write =
    (project: IProject) =>
    (modulo: ts.LeftHandSideExpression) =>
    (equals: boolean) =>
    (
      expression: ts.Expression,
      declaration: ts.FunctionDeclaration,
    ): ts.CallExpression => {
      const p =
        FunctionalValidateParametersProgrammer.decompose(project)(modulo)(
          equals,
        )(declaration);
      const r = FunctionalValidateReturnProgrammer.decompose(project)(modulo)(
        equals,
      )(expression, declaration);
      return ExpressionFactory.selfCall(
        ts.factory.createBlock(
          [
            ...p.functions,
            ...r.functions,
            ts.factory.createReturnStatement(
              ts.factory.createArrowFunction(
                r.async
                  ? [ts.factory.createModifier(ts.SyntaxKind.AsyncKeyword)]
                  : undefined,
                undefined,
                declaration.parameters,
                getReturnTypeNode(declaration, r.async),
                undefined,
                ts.factory.createBlock(
                  [...p.statements, ...r.statements],
                  true,
                ),
              ),
            ),
          ],
          true,
        ),
      );
    };

  export const hookErrors = (props: {
    expression: ts.Expression;
    replacer: ts.Expression;
  }): ts.CallExpression =>
    ts.factory.createCallExpression(
      ts.factory.createPropertyAccessExpression(props.expression, "map"),
      undefined,
      [
        ts.factory.createArrowFunction(
          undefined,
          undefined,
          [IdentifierFactory.parameter("error")],
          undefined,
          undefined,
          ts.factory.createObjectLiteralExpression(
            [
              ts.factory.createSpreadAssignment(
                ts.factory.createIdentifier("error"),
              ),
              ts.factory.createPropertyAssignment(
                "path",
                ts.factory.createCallExpression(
                  ts.factory.createPropertyAccessExpression(
                    ts.factory.createPropertyAccessExpression(
                      ts.factory.createIdentifier("error"),
                      "path",
                    ),
                    "replace",
                  ),
                  undefined,
                  [ts.factory.createStringLiteral("$input"), props.replacer],
                ),
              ),
            ],
            true,
          ),
        ),
      ],
    );

  export const getReturnTypeNode = (
    declaration: ts.FunctionDeclaration,
    async: boolean,
  ): ts.TypeNode | undefined =>
    declaration.type
      ? async
        ? !!(declaration.type! as ts.TypeReferenceNode).typeArguments?.[0]
          ? ts.factory.createTypeReferenceNode("Promise", [
              ts.factory.createImportTypeNode(
                ts.factory.createLiteralTypeNode(
                  ts.factory.createStringLiteral("typia"),
                ),
                undefined,
                ts.factory.createIdentifier("IValidation"),
                [
                  (declaration.type! as ts.TypeReferenceNode)
                    .typeArguments![0]!,
                ],
              ),
            ])
          : undefined
        : ts.factory.createImportTypeNode(
            ts.factory.createLiteralTypeNode(
              ts.factory.createStringLiteral("typia"),
            ),
            undefined,
            ts.factory.createIdentifier("IValidation"),
            [declaration.type],
          )
      : undefined;
}
