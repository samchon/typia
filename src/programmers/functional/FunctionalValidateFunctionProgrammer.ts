import ts from "typescript";

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
    ): ts.ArrowFunction => {
      const { async, statements } =
        FunctionalValidateReturnProgrammer.writeStatements(project)(modulo)(
          equals,
        )(expression, declaration);
      return ts.factory.createArrowFunction(
        async
          ? [ts.factory.createModifier(ts.SyntaxKind.AsyncKeyword)]
          : undefined,
        undefined,
        declaration.parameters,
        declaration.type
          ? ts.factory.createImportTypeNode(
              ts.factory.createLiteralTypeNode(
                ts.factory.createStringLiteral("typia"),
              ),
              undefined,
              ts.factory.createIdentifier("IValidation"),
              [declaration.type],
            )
          : undefined,
        undefined,
        ts.factory.createBlock(
          [
            ...FunctionalValidateParametersProgrammer.writeStatements(project)(
              modulo,
            )(equals)(declaration),
            ...statements,
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
}
