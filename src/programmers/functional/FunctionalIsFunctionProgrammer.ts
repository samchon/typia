import ts from "typescript";

import { IProject } from "../../transformers/IProject";

import { FunctionalIsParametersProgrammer } from "./FunctionalIsParametersProgrammer";
import { FunctionalIsReturnProgrammer } from "./FunctionalIsReturnProgrammer";

export namespace FunctionalIsFunctionProgrammer {
  export const write =
    (project: IProject) =>
    (modulo: ts.LeftHandSideExpression) =>
    (equals: boolean) =>
    (
      expression: ts.Expression,
      declaration: ts.FunctionDeclaration,
    ): ts.ArrowFunction => {
      const { async, statements } =
        FunctionalIsReturnProgrammer.writeStatements(project)(modulo)(equals)(
          expression,
          declaration,
        );
      return ts.factory.createArrowFunction(
        async
          ? [ts.factory.createModifier(ts.SyntaxKind.AsyncKeyword)]
          : undefined,
        undefined,
        declaration.parameters,
        getReturnTypeNode(declaration, async),
        undefined,
        ts.factory.createBlock(
          [
            ...FunctionalIsParametersProgrammer.writeStatements(project)(
              modulo,
            )(equals)(declaration),
            ...statements,
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
