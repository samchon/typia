import ts from "typescript";

import { ExpressionFactory } from "../../factories/ExpressionFactory";
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
    ): ts.CallExpression => {
      const { async } = FunctionalGeneralProgrammer.getReturnType(
        project.checker,
      )(declaration);
      const result = decompose(project)(modulo)(equals)(declaration);
      const caller: ts.CallExpression = ts.factory.createCallExpression(
        expression,
        undefined,
        declaration.parameters.map((p) =>
          ts.factory.createIdentifier(p.name.getText()),
        ),
      );
      return ExpressionFactory.selfCall(
        ts.factory.createBlock(
          [
            ...result.functions,
            ts.factory.createReturnStatement(
              ts.factory.createArrowFunction(
                async
                  ? [ts.factory.createModifier(ts.SyntaxKind.AsyncKeyword)]
                  : undefined,
                undefined,
                declaration.parameters,
                FunctionalValidateFunctionProgrammer.getReturnTypeNode(
                  declaration,
                  async,
                ),
                undefined,
                ts.factory.createBlock(
                  [
                    ...result.statements,
                    ts.factory.createReturnStatement(
                      ts.factory.createObjectLiteralExpression(
                        [
                          ts.factory.createPropertyAssignment(
                            "success",
                            ts.factory.createTrue(),
                          ),
                          ts.factory.createPropertyAssignment(
                            "data",
                            async
                              ? ts.factory.createAwaitExpression(caller)
                              : caller,
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
      declaration: ts.FunctionDeclaration,
    ): {
      functions: ts.Statement[];
      statements: ts.Statement[];
    } => {
      const resultName: string = StringUtil.escapeDuplicate(
        declaration.parameters.map((p) => p.name.getText()),
      )("paramErrorResults");
      const validationResultArray: ts.ArrayLiteralExpression =
        ts.factory.createArrayLiteralExpression(
          declaration.parameters.map((p, i) =>
            ts.factory.createAsExpression(
              ts.factory.createCallExpression(
                ts.factory.createIdentifier(`__validate_param_${i}`),
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
      const errorMatrix = ts.factory.createCallExpression(
        ts.factory.createPropertyAccessExpression(validationResultArray, "map"),
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
            ts.factory.createConditionalExpression(
              ts.factory.createStrictEquality(
                ts.factory.createTrue(),
                ts.factory.createPropertyAccessExpression(
                  ts.factory.createIdentifier("r"),
                  "success",
                ),
              ),
              undefined,
              ts.factory.createIdentifier("r"),
              undefined,
              ts.factory.createObjectLiteralExpression(
                [
                  ts.factory.createSpreadAssignment(
                    ts.factory.createIdentifier("r"),
                  ),
                  ts.factory.createPropertyAssignment(
                    "errors",
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
                true,
              ),
            ),
          ),
        ],
      );
      const failures = ts.factory.createCallExpression(
        ts.factory.createPropertyAccessExpression(errorMatrix, "filter"),
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
      return {
        functions: declaration.parameters.map((p, i) =>
          StatementFactory.constant(
            `__validate_param_${i}`,
            ValidateProgrammer.write(project)(modulo)(equals)(
              project.checker.getTypeFromTypeNode(
                p.type ?? TypeFactory.keyword("any"),
              ),
            ),
          ),
        ),
        statements: [
          StatementFactory.constant(resultName, failures),
          ts.factory.createIfStatement(
            ts.factory.createStrictInequality(
              ts.factory.createNumericLiteral("0"),
              ts.factory.createPropertyAccessExpression(
                ts.factory.createIdentifier(resultName),
                "length",
              ),
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
                      IdentifierFactory.access(
                        ts.factory.createCallExpression(
                          IdentifierFactory.access(
                            ts.factory.createIdentifier(resultName),
                          )("map"),
                          undefined,
                          [
                            ts.factory.createArrowFunction(
                              undefined,
                              undefined,
                              [
                                IdentifierFactory.parameter(
                                  "r",
                                  TypeFactory.keyword("any"),
                                ),
                              ],
                              undefined,
                              undefined,
                              IdentifierFactory.access(
                                ts.factory.createIdentifier("r"),
                              )("errors"),
                            ),
                          ],
                        ),
                      )("flat"),
                      undefined,
                      undefined,
                    ),
                  ),
                ],
                true,
              ),
            ),
          ),
        ],
      };
    };
}
