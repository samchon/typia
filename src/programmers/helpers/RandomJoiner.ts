import { OpenApi } from "@samchon/openapi";
import ts from "typescript";

import { ExpressionFactory } from "../../factories/ExpressionFactory";
import { IdentifierFactory } from "../../factories/IdentifierFactory";
import { LiteralFactory } from "../../factories/LiteralFactory";

import { Metadata } from "../../schemas/metadata/Metadata";
import { MetadataArray } from "../../schemas/metadata/MetadataArray";
import { MetadataArrayType } from "../../schemas/metadata/MetadataArrayType";
import { MetadataObject } from "../../schemas/metadata/MetadataObject";
import { MetadataProperty } from "../../schemas/metadata/MetadataProperty";
import { MetadataTuple } from "../../schemas/metadata/MetadataTuple";
import { MetadataTupleType } from "../../schemas/metadata/MetadataTupleType";

import { Escaper } from "../../utils/Escaper";

export namespace RandomJoiner {
  export type Decoder = (metadata: Metadata) => ts.Expression;

  export const array = (props: {
    decode: Decoder;
    expression: ts.Expression;
    array: MetadataArrayType;
    schema: Omit<OpenApi.IJsonSchema.IArray, "items"> | undefined;
  }): ts.Expression => {
    const generator: ts.Expression = ts.factory.createCallExpression(
      props.expression,
      undefined,
      [
        ts.factory.createObjectLiteralExpression(
          [
            ...(props.schema
              ? Object.entries(props.schema)
                  .filter(([key]) => key !== "items")
                  .map(([key, value]) =>
                    ts.factory.createPropertyAssignment(
                      key,
                      LiteralFactory.write(value),
                    ),
                  )
              : []),
            ...(props.schema
              ? []
              : [
                  ts.factory.createSpreadAssignment(
                    ts.factory.createIdentifier("_schema"),
                  ),
                ]),
            ts.factory.createPropertyAssignment(
              "element",
              ts.factory.createArrowFunction(
                undefined,
                undefined,
                [],
                undefined,
                undefined,
                props.decode(props.array.value),
              ),
            ),
          ],
          true,
        ),
      ],
    );
    if (props.array.recursive === false) return generator;
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
    decode: Decoder;
    object: MetadataObject;
  }): ts.ConciseBody => {
    if (props.object.properties.length === 0) return LiteralFactory.write({});

    // LIST UP PROPERTIES
    const regular = props.object.properties.filter((p) =>
      p.key.isSoleLiteral(),
    );
    const dynamic = props.object.properties.filter(
      (p) => !p.key.isSoleLiteral(),
    );

    return ts.factory.createObjectLiteralExpression(
      [
        ...regular.map((p) => {
          const str: string = p.key.getSoleLiteral()!;
          return ts.factory.createPropertyAssignment(
            Escaper.variable(str) ? str : ts.factory.createStringLiteral(str),
            props.decode(p.value),
          );
        }),
        ...dynamic.map((property) =>
          ts.factory.createSpreadAssignment(
            dynamicProperty({
              decode: props.decode,
              property: property,
            }),
          ),
        ),
      ],
      true,
    );
  };

  const dynamicProperty = (props: {
    decode: Decoder;
    property: MetadataProperty;
  }) => {
    const tuple: MetadataTuple = MetadataTuple.create({
      type: MetadataTupleType.create({
        name: `[${props.property.key.getName()}, ${props.property.value.getName()}]`,
        elements: [props.property.key, props.property.value],
        index: null,
        recursive: false,
        nullables: [false],
      }),
      tags: [],
    });
    const array: MetadataArray = MetadataArray.create({
      type: MetadataArrayType.create({
        name: `Array<[${props.property.key.getName()}, ${props.property.value.getName()}]>`,
        value: (() => {
          const elem: Metadata = Metadata.initialize();
          elem.tuples.push(tuple);
          return elem;
        })(),
        nullables: [false],
        recursive: false,
        index: null,
      }),
      tags: [[]],
    });
    return ts.factory.createCallExpression(
      IdentifierFactory.access(
        ts.factory.createIdentifier("Object"),
        "fromEntries",
      ),
      undefined,
      [
        props.decode(
          (() => {
            const elem: Metadata = Metadata.initialize();
            elem.arrays.push(array);
            return elem;
          })(),
        ),
      ],
    );
  };
  // ts.factory.createCallExpression(props.coalesce("array"), undefined, [
  //   ts.factory.createArrowFunction(
  //     undefined,
  //     undefined,
  //     [],
  //     undefined,
  //     undefined,
  //     ts.factory.createBinaryExpression(
  //       ts.factory.createElementAccessExpression(
  //         ts.factory.createIdentifier("output"),
  //         props.decode(props.property.key),
  //       ),
  //       ts.factory.createToken(ts.SyntaxKind.EqualsToken),
  //       props.decode(props.property.value),
  //     ),
  //   ),
  //   ts.factory.createCallExpression(props.coalesce("integer"), undefined, [
  //     ExpressionFactory.number(0),
  //     ExpressionFactory.number(3),
  //   ]),
  // ]);
}
