import ts from "typescript";

import { ExpressionFactory } from "../../factories/ExpressionFactory";
import { StatementFactory } from "../../factories/StatementFactory";
import { TypeFactory } from "../../factories/TypeFactory";

import { Metadata } from "../../schemas/metadata/Metadata";
import { MetadataObject } from "../../schemas/metadata/MetadataObject";
import { MetadataProperty } from "../../schemas/metadata/MetadataProperty";

import { Escaper } from "../../utils/Escaper";

export namespace RandomJoiner {
  export type Decoder = (metadata: Metadata) => ts.Expression;

  export const array = (props: {
    coalesce: (method: string) => ts.Expression;
    decode: Decoder;
    explore: IExplore;
    length: ts.Expression | undefined;
    unique: ts.Expression | undefined;
    metadata: Metadata;
  }): ts.Expression => {
    const generator: ts.Expression = ts.factory.createCallExpression(
      props.coalesce("array"),
      undefined,
      [
        ts.factory.createArrowFunction(
          undefined,
          undefined,
          [],
          undefined,
          undefined,
          props.decode(props.metadata),
        ),
        ...(props.length
          ? [props.length]
          : props.unique
            ? [ts.factory.createIdentifier("undefined")]
            : []),
        ...(props.unique ? [props.unique] : []),
      ],
    );
    if (props.explore.recursive === false) return generator;
    return ts.factory.createConditionalExpression(
      ts.factory.createGreaterThanEquals(
        ExpressionFactory.number(5),
        ts.factory.createIdentifier("_depth"),
      ),
      undefined,
      generator,
      undefined,
      ts.factory.createArrayLiteralExpression([]),
    );
  };

  export const tuple = (props: {
    decode: Decoder;
    elements: Metadata[];
  }): ts.ArrayLiteralExpression =>
    ts.factory.createArrayLiteralExpression(
      props.elements.map((elem) => props.decode(elem.rest ?? elem)),
      true,
    );

  export const object = (props: {
    coalesce: (method: string) => ts.Expression;
    decode: Decoder;
    object: MetadataObject;
  }): ts.ConciseBody => {
    if (props.object.properties.length === 0)
      return ts.factory.createIdentifier("{}");

    // LIST UP PROPERTIES
    const regular = props.object.properties.filter((p) =>
      p.key.isSoleLiteral(),
    );
    const dynamic = props.object.properties.filter(
      (p) => !p.key.isSoleLiteral(),
    );

    // REGULAR OBJECT
    const literal: ts.ObjectLiteralExpression =
      ts.factory.createObjectLiteralExpression(
        regular.map((p) => {
          const str: string = p.key.getSoleLiteral()!;
          return ts.factory.createPropertyAssignment(
            Escaper.variable(str) ? str : ts.factory.createStringLiteral(str),
            props.decode(p.value),
          );
        }),
        true,
      );
    if (dynamic.length === 0) return literal;

    const properties: ts.Statement[] = dynamic.map((p) =>
      ts.factory.createExpressionStatement(
        dynamicProperty({
          coalesce: props.coalesce,
          decode: props.decode,
          property: p,
        }),
      ),
    );
    return ts.factory.createBlock(
      [
        StatementFactory.constant(
          "output",
          ts.factory.createAsExpression(literal, TypeFactory.keyword("any")),
        ),
        ...(props.object.recursive
          ? [
              ts.factory.createIfStatement(
                ts.factory.createGreaterThanEquals(
                  ExpressionFactory.number(5),
                  ts.factory.createIdentifier("_depth"),
                ),
                ts.factory.createBlock(properties, true),
              ),
            ]
          : properties),
        ts.factory.createReturnStatement(ts.factory.createIdentifier("output")),
      ],
      true,
    );
  };

  const dynamicProperty = (props: {
    coalesce: (method: string) => ts.Expression;
    decode: Decoder;
    property: MetadataProperty;
  }) =>
    ts.factory.createCallExpression(props.coalesce("array"), undefined, [
      ts.factory.createArrowFunction(
        undefined,
        undefined,
        [],
        undefined,
        undefined,
        ts.factory.createBinaryExpression(
          ts.factory.createElementAccessExpression(
            ts.factory.createIdentifier("output"),
            props.decode(props.property.key),
          ),
          ts.factory.createToken(ts.SyntaxKind.EqualsToken),
          props.decode(props.property.value),
        ),
      ),
      ts.factory.createCallExpression(props.coalesce("integer"), undefined, [
        ExpressionFactory.number(0),
        ExpressionFactory.number(3),
      ]),
    ]);
}

interface IExplore {
  function: boolean;
  recursive: boolean;
}
