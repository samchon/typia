import ts from "typescript";

import { IdentifierFactory } from "../../factories/IdentifierFactory";
import { StatementFactory } from "../../factories/StatementFactory";
import { TypeFactory } from "../../factories/TypeFactory";

import { IProject } from "../../transformers/IProject";

import { StringUtil } from "../../utils/StringUtil";

import { ValidateProgrammer } from "../ValidateProgrammer";
import { FunctionalValidateFunctionProgrammer } from "./FunctionalValidateFunctionProgrammer";
import { FunctionalGeneralProgrammer } from "./internal/FunctionalGeneralProgrammer";

export namespace FunctionalValidateParametersProgrammer {
  export const write =
    (project: IProject) =>
    (modulo: ts.LeftHandSideExpression) =>
    (equals: boolean) =>
    (
      expression: ts.Expression,
      declaration: ts.FunctionDeclaration,
    ): ts.ArrowFunction => {
      const { async } = FunctionalGeneralProgrammer.getReturnType(
        project.checker,
      )(declaration);
      const caller: ts.CallExpression = ts.factory.createCallExpression(
        expression,
        undefined,
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
            ...writeStatements(project)(modulo)(equals)(declaration),
            ts.factory.createReturnStatement(
              ts.factory.createObjectLiteralExpression(
                [
                  ts.factory.createPropertyAssignment(
                    "success",
                    ts.factory.createTrue(),
                  ),
                  ts.factory.createPropertyAssignment(
                    "data",
                    async ? ts.factory.createAwaitExpression(caller) : caller,
                  ),
                  ts.factory.createPropertyAssignment(
                    "errors",
                    ts.factory.createArrayLiteralExpression([]),
                  ),
                ],
                true,
              ),
            ),
          ],
          true,
        ),
      );
    };

  export const writeStatements =
    (project: IProject) =>
    (modulo: ts.LeftHandSideExpression) =>
    (equals: boolean) =>
    (declaration: ts.FunctionDeclaration): ts.Statement[] => {
      const resultName: string = StringUtil.escapeDuplicate(
        declaration.parameters.map((p) => p.name.getText()),
      )("paramResults");
      const validationResultArray: ts.ArrayLiteralExpression =
        ts.factory.createArrayLiteralExpression(
          declaration.parameters.map((p) =>
            ts.factory.createAsExpression(
              ts.factory.createCallExpression(
                ValidateProgrammer.write(project)(modulo)(equals)(
                  project.checker.getTypeFromTypeNode(
                    p.type ?? TypeFactory.keyword("any"),
                  ),
                ),
                undefined,
                [ts.factory.createIdentifier(p.name.getText())],
              ),
              ts.factory.createImportTypeNode(
                ts.factory.createLiteralTypeNode(
                  ts.factory.createStringLiteral("typia"),
                ),
                undefined,
                ts.factory.createQualifiedName(
                  ts.factory.createIdentifier("IValidation"),
                  ts.factory.createIdentifier("IFailure"),
                ),
                undefined,
                false,
              ),
            ),
          ),
          true,
        );
      const failures = ts.factory.createCallExpression(
        ts.factory.createPropertyAccessExpression(
          validationResultArray,
          "filter",
        ),
        undefined,
        [
          ts.factory.createArrowFunction(
            undefined,
            undefined,
            [IdentifierFactory.parameter("r")],
            undefined,
            undefined,
            ts.factory.createStrictEquality(
              ts.factory.createFalse(),
              ts.factory.createPropertyAccessExpression(
                ts.factory.createIdentifier("r"),
                "success",
              ),
            ),
          ),
        ],
      );
      const errorMatrix = ts.factory.createCallExpression(
        ts.factory.createPropertyAccessExpression(
          ts.factory.createIdentifier(resultName),
          "map",
        ),
        undefined,
        [
          ts.factory.createArrowFunction(
            undefined,
            undefined,
            [
              IdentifierFactory.parameter("r"),
              IdentifierFactory.parameter("i"),
            ],
            undefined,
            undefined,
            FunctionalValidateFunctionProgrammer.hookErrors({
              expression: ts.factory.createPropertyAccessExpression(
                ts.factory.createIdentifier("r"),
                "errors",
              ),
              replacer: ts.factory.createTemplateExpression(
                ts.factory.createTemplateHead("$input.parameters["),
                [
                  ts.factory.createTemplateSpan(
                    ts.factory.createIdentifier("i"),
                    ts.factory.createTemplateTail("]"),
                  ),
                ],
              ),
            }),
          ),
        ],
      );
      return [
        StatementFactory.constant(resultName, failures),
        ts.factory.createIfStatement(
          ts.factory.createBinaryExpression(
            ts.factory.createPropertyAccessExpression(
              ts.factory.createIdentifier(resultName),
              "length",
            ),
            ts.SyntaxKind.GreaterThanToken,
            ts.factory.createNumericLiteral("0"),
          ),
          ts.factory.createReturnStatement(
            ts.factory.createObjectLiteralExpression(
              [
                ts.factory.createPropertyAssignment(
                  "success",
                  ts.factory.createFalse(),
                ),
                ts.factory.createPropertyAssignment(
                  "errors",
                  ts.factory.createCallExpression(
                    ts.factory.createPropertyAccessExpression(
                      errorMatrix,
                      "flat",
                    ),
                    undefined,
                    undefined,
                  ),
                ),
              ],
              true,
            ),
          ),
        ),
      ];
    };
}
