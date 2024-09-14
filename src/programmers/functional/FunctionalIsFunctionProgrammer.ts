import ts from "typescript";

import { ExpressionFactory } from "../../factories/ExpressionFactory";

import { ITypiaContext } from "../../transformers/ITypiaContext";

import { FunctionalIsParametersProgrammer } from "./FunctionalIsParametersProgrammer";
import { FunctionalIsReturnProgrammer } from "./FunctionalIsReturnProgrammer";

export namespace FunctionalIsFunctionProgrammer {
  export const write =
    (project: ITypiaContext) =>
    (modulo: ts.LeftHandSideExpression) =>
    (equals: boolean) =>
    (
      expression: ts.Expression,
      declaration: ts.FunctionDeclaration,
    ): ts.CallExpression => {
      const p =
        FunctionalIsParametersProgrammer.decompose(project)(modulo)(equals)(
          declaration,
        );
      const r = FunctionalIsReturnProgrammer.decompose(project)(modulo)(equals)(
        expression,
        declaration,
      );
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

  export const getReturnTypeNode = (
    declaration: ts.FunctionDeclaration,
    async: boolean,
  ): ts.TypeNode | undefined =>
    declaration.type
      ? async
        ? !!(declaration.type! as ts.TypeReferenceNode).typeArguments?.[0]
          ? ts.factory.createTypeReferenceNode("Promise", [
              ts.factory.createUnionTypeNode([
                (declaration.type! as ts.TypeReferenceNode).typeArguments![0]!,
                ts.factory.createTypeReferenceNode("null"),
              ]),
            ])
          : undefined
        : ts.factory.createUnionTypeNode([
            declaration.type,
            ts.factory.createTypeReferenceNode("null"),
          ])
      : undefined;
}
