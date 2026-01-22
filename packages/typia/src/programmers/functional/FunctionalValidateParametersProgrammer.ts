import ts from "typescript";

import { ExpressionFactory } from "../../factories/ExpressionFactory";
import { IdentifierFactory } from "../../factories/IdentifierFactory";
import { StatementFactory } from "../../factories/StatementFactory";
import { TypeFactory } from "../../factories/TypeFactory";

import { ITypiaContext } from "../../transformers/ITypiaContext";

import { StringUtil } from "../../utils/StringUtil";

import { ValidateProgrammer } from "../ValidateProgrammer";
import { FunctionalValidateFunctionProgrammer } from "./FunctionalValidateFunctionProgrammer";
import { FunctionalGeneralProgrammer } from "./internal/FunctionalGeneralProgrammer";

export namespace FunctionalValidateParametersProgrammer {
  export interface IConfig {
    equals: boolean;
  }
  export interface IProps {
    context: ITypiaContext;
    modulo: ts.LeftHandSideExpression;
    config: IConfig;
    declaration: ts.FunctionDeclaration;
    expression: ts.Expression;
    init?: ts.Expression | undefined;
  }
  export interface IDecomposeProps {
    context: ITypiaContext;
    modulo: ts.LeftHandSideExpression;
    config: IConfig;
    declaration: ts.FunctionDeclaration;
  }
  export interface IDecomposeOutput {
    functions: ts.Statement[];
    statements: ts.Statement[];
  }

  export const write = (props: IProps): ts.CallExpression => {
    const { async } = FunctionalGeneralProgrammer.getReturnType({
      checker: props.context.checker,
      declaration: props.declaration,
    });
    const result = decompose(props);
    const caller: ts.CallExpression = ts.factory.createCallExpression(
      props.expression,
      undefined,
      props.declaration.parameters.map((p) =>
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
              props.declaration.parameters,
              FunctionalValidateFunctionProgrammer.getReturnTypeNode({
                context: props.context,
                declaration: props.declaration,
                async,
              }),
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

  export const decompose = (props: IDecomposeProps): IDecomposeOutput => {
    const resultName: string = StringUtil.escapeDuplicate({
      keep: props.declaration.parameters.map((p) => p.name.getText()),
      input: "paramErrorResults",
    });
    const validationResultArray: ts.ArrayLiteralExpression =
      ts.factory.createArrayLiteralExpression(
        props.declaration.parameters.map((p, i) =>
          ts.factory.createAsExpression(
            ts.factory.createCallExpression(
              ts.factory.createIdentifier(`__validate_param_${i}`),
              undefined,
              [ts.factory.createIdentifier(p.name.getText())],
            ),
            props.context.importer.type({
              file: "typia",
              name: "IValidation.IFailure",
            }),
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
          [IdentifierFactory.parameter("r"), IdentifierFactory.parameter("i")],
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
      functions: props.declaration.parameters.map((p, i) =>
        StatementFactory.constant({
          name: `__validate_param_${i}`,
          value: ValidateProgrammer.write({
            ...props,
            type: props.context.checker.getTypeFromTypeNode(
              p.type ?? TypeFactory.keyword("any"),
            ),
            name: undefined,
            init: undefined,
          }),
        }),
      ),
      statements: [
        StatementFactory.constant({
          name: resultName,
          value: failures,
        }),
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
                          "map",
                        ),
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
                              "errors",
                            ),
                          ),
                        ],
                      ),
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
      ],
    };
  };
}
