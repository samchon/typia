import ts from "typescript";

import { ExpressionFactory } from "../../factories/ExpressionFactory";
import { IdentifierFactory } from "../../factories/IdentifierFactory";

import { Metadata } from "../../schemas/metadata/Metadata";
import { MetadataArray } from "../../schemas/metadata/MetadataArray";
import { MetadataArrayType } from "../../schemas/metadata/MetadataArrayType";
import { MetadataMap } from "../../schemas/metadata/MetadataMap";
import { MetadataObjectType } from "../../schemas/metadata/MetadataObjectType";
import { MetadataSet } from "../../schemas/metadata/MetadataSet";
import { MetadataTuple } from "../../schemas/metadata/MetadataTuple";
import { MetadataTupleType } from "../../schemas/metadata/MetadataTupleType";

import { FeatureProgrammer } from "../FeatureProgrammer";
import { check_union_array_like } from "../internal/check_union_array_like";
import { UnionPredicator } from "./UnionPredicator";

export namespace UnionExplorer {
  export interface Decoder<T> {
    (props: {
      input: ts.Expression;
      definition: T;
      explore: FeatureProgrammer.IExplore;
    }): ts.Expression;
  }
  export type ObjectCombiner = Decoder<MetadataObjectType[]>;

  /* -----------------------------------------------------------
        OBJECT
    ----------------------------------------------------------- */
  export const object = (props: {
    config: FeatureProgrammer.IConfig;
    level?: number;
    objects: MetadataObjectType[];
    input: ts.Expression;
    explore: FeatureProgrammer.IExplore;
  }): ts.Expression => {
    // BREAKER
    if (props.objects.length === 1)
      return props.config.objector.decoder({
        input: props.input,
        object: props.objects[0]!,
        explore: props.explore,
      });

    const expected: string = `(${props.objects.map((t) => t.name).join(" | ")})`;

    // POSSIBLE TO SPECIALIZE?
    const specList = UnionPredicator.object(props.objects);
    if (specList.length === 0) {
      const condition: ts.Expression = props.config.objector.unionizer({
        objects: props.objects,
        input: props.input,
        explore: {
          ...props.explore,
          tracable: false,
        },
      });
      return props.config.objector.full
        ? props.config.objector.full({
            condition,
            expected,
            explore: props.explore,
            input: props.input,
          })
        : condition;
    }
    const remained: MetadataObjectType[] = props.objects.filter(
      (t) => specList.find((s) => s.object === t) === undefined,
    );

    // DO SPECIALIZE
    const condition: ts.IfStatement = specList
      .filter((spec) => spec.property.key.getSoleLiteral() !== null)
      .map((spec, i, array) => {
        const key: string = spec.property.key.getSoleLiteral()!;
        const accessor: ts.Expression = IdentifierFactory.access(
          props.input,
          key,
        );
        const pred: ts.Expression = spec.neighbor
          ? props.config.objector.checker({
              input: accessor,
              metadata: spec.property.value,
              explore: {
                ...props.explore,
                tracable: false,
                postfix: IdentifierFactory.postfix(key),
              },
            })
          : (props.config.objector.required || ((exp) => exp))(
              ExpressionFactory.isRequired(accessor),
            );
        return ts.factory.createIfStatement(
          (props.config.objector.is || ((exp) => exp))(pred),
          ts.factory.createReturnStatement(
            props.config.objector.decoder({
              object: spec.object,
              input: props.input,
              explore: props.explore,
            }),
          ),
          i === array.length - 1
            ? remained.length
              ? ts.factory.createReturnStatement(
                  object({
                    config: props.config,
                    level: (props.level ?? 0) + 1,
                    input: props.input,
                    objects: remained,
                    explore: props.explore,
                  }),
                )
              : props.config.objector.failure({
                  input: props.input,
                  explore: props.explore,
                  expected,
                })
            : undefined,
        );
      })
      .reverse()
      .reduce((a, b) =>
        ts.factory.createIfStatement(b.expression, b.thenStatement, a),
      );

    // RETURNS WITH CONDITIONS
    return ts.factory.createCallExpression(
      ts.factory.createArrowFunction(
        undefined,
        undefined,
        [],
        undefined,
        undefined,
        ts.factory.createBlock([condition], true),
      ),
      undefined,
      undefined,
    );
  };

  /* -----------------------------------------------------------
        ARRAY LIKE
    ----------------------------------------------------------- */
  export const tuple = (props: {
    config: check_union_array_like.IConfig<MetadataTuple, MetadataTuple>;
    parameters: ts.ParameterDeclaration[];
    input: ts.Expression;
    tuples: MetadataTuple[];
    explore: FeatureProgrammer.IExplore;
  }) =>
    check_union_array_like<MetadataTuple, MetadataTuple, MetadataTuple>({
      config: props.config,
      accessor: {
        transform: (x) => x,
        element: (x) => x,
        size: null!,
        front: (input) => input,
        array: (input) => input,
        name: (t) => t.type.name,
      },
      parameters: props.parameters,
      input: props.input,
      definitions: props.tuples,
      explore: props.explore,
    });
  export namespace tuple {
    export type IConfig = check_union_array_like.IConfig<
      MetadataTuple,
      MetadataTuple
    >;
  }

  export const array = (props: {
    config: array.IConfig;
    parameters: ts.ParameterDeclaration[];
    input: ts.Expression;
    arrays: MetadataArray[];
    explore: FeatureProgrammer.IExplore;
  }) =>
    check_union_array_like<MetadataArray, MetadataArray, Metadata>({
      config: props.config,
      accessor: {
        transform: (x) => x,
        element: (x) => x.type.value,
        size: (input) => IdentifierFactory.access(input, "length"),
        front: (input) => ts.factory.createElementAccessExpression(input, 0),
        array: (input) => input,
        name: (t) => t.type.name,
      },
      parameters: props.parameters,
      input: props.input,
      definitions: props.arrays,
      explore: props.explore,
    });
  export namespace array {
    export type IConfig = check_union_array_like.IConfig<
      MetadataArray,
      Metadata
    >;
  }

  export const array_or_tuple = (props: {
    config: array_or_tuple.IConfig;
    parameters: ts.ParameterDeclaration[];
    input: ts.Expression;
    definitions: (MetadataArray | MetadataTuple)[];
    explore: FeatureProgrammer.IExplore;
  }) =>
    check_union_array_like<
      MetadataArray | MetadataTuple,
      MetadataArray | MetadataTuple,
      Metadata | MetadataTuple
    >({
      config: props.config,
      accessor: {
        transform: (x) => x,
        element: (x) => (x instanceof MetadataArray ? x.type.value : x),
        size: (input) => IdentifierFactory.access(input, "length"),
        front: (input) => ts.factory.createElementAccessExpression(input, 0),
        array: (input) => input,
        name: (m) => m.type.name,
      },
      parameters: props.parameters,
      input: props.input,
      definitions: props.definitions,
      explore: props.explore,
    });
  export namespace array_or_tuple {
    export type IConfig = check_union_array_like.IConfig<
      MetadataArray | MetadataTuple,
      Metadata | MetadataTuple
    >;
  }

  export const set = (props: {
    config: set.IConfig;
    parameters: ts.ParameterDeclaration[];
    input: ts.Expression;
    sets: MetadataSet[];
    explore: FeatureProgrammer.IExplore;
  }) =>
    check_union_array_like<Metadata, MetadataArray, Metadata>({
      config: props.config,
      accessor: {
        transform: (value: Metadata) =>
          MetadataArray.create({
            tags: [],
            type: MetadataArrayType.create({
              name: `Set<${value.getName()}>`,
              index: null,
              recursive: false,
              nullables: [],
              value,
            }),
          }),
        element: (array) => array.type.value,
        size: (input) => IdentifierFactory.access(input, "size"),
        front: (input) =>
          IdentifierFactory.access(
            ts.factory.createCallExpression(
              IdentifierFactory.access(
                ts.factory.createCallExpression(
                  IdentifierFactory.access(input, "values"),
                  undefined,
                  undefined,
                ),
                "next",
              ),
              undefined,
              undefined,
            ),
            "value",
          ),
        array: (input) =>
          ts.factory.createArrayLiteralExpression(
            [ts.factory.createSpreadElement(input)],
            false,
          ),
        name: (_m, e) => `Set<${e.getName()}>`,
      },
      parameters: props.parameters,
      input: props.input,
      definitions: props.sets.map((s) => s.value),
      explore: props.explore,
    });
  export namespace set {
    export type IConfig = check_union_array_like.IConfig<
      MetadataArray,
      Metadata
    >;
  }

  export const map = (props: {
    config: map.IConfig;
    parameters: ts.ParameterDeclaration[];
    input: ts.Expression;
    maps: MetadataMap[];
    explore: FeatureProgrammer.IExplore;
  }) =>
    check_union_array_like<MetadataMap, MetadataArray, [Metadata, Metadata]>({
      config: props.config,
      accessor: {
        element: (array) =>
          array.type.value.tuples[0]!.type.elements as [Metadata, Metadata],
        size: (input) => IdentifierFactory.access(input, "size"),
        front: (input) =>
          IdentifierFactory.access(
            ts.factory.createCallExpression(
              IdentifierFactory.access(
                ts.factory.createCallExpression(
                  IdentifierFactory.access(input, "entries"),
                  undefined,
                  undefined,
                ),
                "next",
              ),
              undefined,
              undefined,
            ),
            "value",
          ),
        array: (input) =>
          ts.factory.createArrayLiteralExpression(
            [ts.factory.createSpreadElement(input)],
            false,
          ),
        name: (_m, [k, v]) => `Map<${k.getName()}, ${v.getName()}>`,
        transform: (m: MetadataMap) =>
          MetadataArray.create({
            tags: [],
            type: MetadataArrayType.create({
              name: `Map<${m.key.getName()}, ${m.value.getName()}>`,
              index: null,
              recursive: false,
              nullables: [],
              value: Metadata.create({
                ...Metadata.initialize(),
                tuples: [
                  (() => {
                    const tuple = MetadataTuple.create({
                      tags: [],
                      type: MetadataTupleType.create({
                        name: `[${m.key.getName()}, ${m.value.getName()}]`,
                        index: null,
                        recursive: false,
                        nullables: [],
                        elements: [m.key, m.value],
                      }),
                    });
                    tuple.type.of_map = true;
                    return tuple;
                  })(),
                ],
              }),
            }),
          }),
      },
      parameters: props.parameters,
      input: props.input,
      definitions: props.maps,
      explore: props.explore,
    });

  export namespace map {
    export type IConfig = check_union_array_like.IConfig<
      MetadataArray,
      [Metadata, Metadata]
    >;
  }
}
