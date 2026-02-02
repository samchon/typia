import ts from "typescript";

import { ExpressionFactory } from "../../factories/ExpressionFactory";
import { IdentifierFactory } from "../../factories/IdentifierFactory";

import { ITypiaContext } from "../../transformers/ITypiaContext";

import { FunctionalValidateParametersProgrammer } from "./FunctionalValidateParametersProgrammer";
import { FunctionalValidateReturnProgrammer } from "./FunctionalValidateReturnProgrammer";

export namespace FunctionalValidateFunctionProgrammer {
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

  export const write = (props: IProps): ts.CallExpression => {
    const p = FunctionalValidateParametersProgrammer.decompose(props);
    const r = FunctionalValidateReturnProgrammer.decompose(props);
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
              props.declaration.parameters,
              getReturnTypeNode({
                context: props.context,
                declaration: props.declaration,
                async: r.async,
              }),
              undefined,
              ts.factory.createBlock([...p.statements, ...r.statements], true),
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

  export const getReturnTypeNode = (props: {
    context: ITypiaContext;
    declaration: ts.FunctionDeclaration;
    async: boolean;
  }): ts.TypeNode | undefined =>
    props.declaration.type
      ? props.async
        ? !!(props.declaration.type! as ts.TypeReferenceNode).typeArguments?.[0]
          ? ts.factory.createTypeReferenceNode("Promise", [
              props.context.importer.type({
                file: "typia",
                name: "IValidation",
                arguments: [
                  (props.declaration.type! as ts.TypeReferenceNode)
                    .typeArguments![0]!,
                ],
              }),
            ])
          : undefined
        : props.context.importer.type({
            file: "typia",
            name: "IValidation",
            arguments: [props.declaration.type],
          })
      : undefined;
}
