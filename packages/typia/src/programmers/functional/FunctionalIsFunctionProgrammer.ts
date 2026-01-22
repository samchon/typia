import ts from "typescript";

import { ExpressionFactory } from "../../factories/ExpressionFactory";

import { ITypiaContext } from "../../transformers/ITypiaContext";

import { FunctionalIsParametersProgrammer } from "./FunctionalIsParametersProgrammer";
import { FunctionalIsReturnProgrammer } from "./FunctionalIsReturnProgrammer";

export namespace FunctionalIsFunctionProgrammer {
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
    const p = FunctionalIsParametersProgrammer.decompose(props);
    const r = FunctionalIsReturnProgrammer.decompose(props);
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

  export const getReturnTypeNode = (props: {
    declaration: ts.FunctionDeclaration;
    async: boolean;
  }): ts.TypeNode | undefined =>
    props.declaration.type
      ? props.async
        ? !!(props.declaration.type! as ts.TypeReferenceNode).typeArguments?.[0]
          ? ts.factory.createTypeReferenceNode("Promise", [
              ts.factory.createUnionTypeNode([
                (props.declaration.type! as ts.TypeReferenceNode)
                  .typeArguments![0]!,
                ts.factory.createTypeReferenceNode("null"),
              ]),
            ])
          : undefined
        : ts.factory.createUnionTypeNode([
            props.declaration.type,
            ts.factory.createTypeReferenceNode("null"),
          ])
      : undefined;
}
