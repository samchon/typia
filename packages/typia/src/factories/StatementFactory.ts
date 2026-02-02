import ts from "typescript";

import { TypeFactory } from "./TypeFactory";

export namespace StatementFactory {
  export const mut = (props: {
    name: string;
    type?: ts.TypeNode | undefined;
    initializer?: ts.Expression | undefined;
  }) =>
    ts.factory.createVariableStatement(
      undefined,
      ts.factory.createVariableDeclarationList(
        [
          ts.factory.createVariableDeclaration(
            props.name,
            undefined,
            props.type !== undefined
              ? props.type
              : props.initializer === undefined
                ? TypeFactory.keyword("any")
                : undefined,
            props.initializer,
          ),
        ],
        ts.NodeFlags.Let,
      ),
    );

  export const constant = (props: {
    name: string;
    type?: ts.TypeNode | undefined;
    value?: ts.Expression | undefined;
  }) =>
    ts.factory.createVariableStatement(
      undefined,
      ts.factory.createVariableDeclarationList(
        [
          ts.factory.createVariableDeclaration(
            props.name,
            undefined,
            props.type !== undefined
              ? props.type
              : props.value === undefined
                ? TypeFactory.keyword("any")
                : undefined,
            props.value,
          ),
        ],
        ts.NodeFlags.Const,
      ),
    );

  export const entry = (props: { key: string; value: string }) =>
    ts.factory.createVariableDeclarationList(
      [
        ts.factory.createVariableDeclaration(
          ts.factory.createArrayBindingPattern([
            ts.factory.createBindingElement(
              undefined,
              undefined,
              ts.factory.createIdentifier(props.key),
              undefined,
            ),
            ts.factory.createBindingElement(
              undefined,
              undefined,
              ts.factory.createIdentifier(props.value),
              undefined,
            ),
          ]),
          undefined,
          undefined,
          undefined,
        ),
      ],
      ts.NodeFlags.Const,
    );

  export const transpile = (script: string) =>
    ts.factory.createExpressionStatement(
      ts.factory.createIdentifier(ts.transpile(script)),
    );

  export const block = (expression: ts.Expression) =>
    ts.factory.createBlock(
      [ts.factory.createExpressionStatement(expression)],
      true,
    );
}
