import ts from "typescript";

import { ExpressionFactory } from "../../factories/ExpressionFactory";
import { IdentifierFactory } from "../../factories/IdentifierFactory";

import { IMetadataTag } from "../../schemas/metadata/IMetadataTag";
import { Metadata } from "../../schemas/metadata/Metadata";
import { MetadataArray } from "../../schemas/metadata/MetadataArray";
import { MetadataObject } from "../../schemas/metadata/MetadataObject";
import { MetadataTuple } from "../../schemas/metadata/MetadataTuple";

import { FeatureProgrammer } from "../FeatureProgrammer";
import { check_union_array_like } from "../internal/check_union_array_like";
import { UnionPredicator } from "./UnionPredicator";

export namespace UnionExplorer {
    export interface Decoder<T> {
        (
            input: ts.Expression,
            target: T,
            explore: FeatureProgrammer.IExplore,
            tags: IMetadataTag[],
            jsDocTags: ts.JSDocTagInfo[],
        ): ts.Expression;
    }
    export type ObjectCombiner = Decoder<MetadataObject[]>;

    /* -----------------------------------------------------------
        OBJECT
    ----------------------------------------------------------- */
    export const object =
        (config: FeatureProgrammer.IConfig, level: number = 0) =>
        (
            input: ts.Expression,
            targets: MetadataObject[],
            explore: FeatureProgrammer.IExplore,
            tags: IMetadataTag[],
            jsDocTags: ts.JSDocTagInfo[],
        ): ts.Expression => {
            // BREAKER
            if (targets.length === 1)
                return config.objector.decoder()(
                    input,
                    targets[0]!,
                    explore,
                    tags,
                    jsDocTags,
                );

            const expected: string = `(${targets
                .map((t) => t.name)
                .join(" | ")})`;

            // POSSIBLE TO SPECIALIZE?
            const specList = UnionPredicator.object(targets);
            if (specList.length === 0) {
                const condition: ts.Expression = config.objector.unionizer(
                    input,
                    targets,
                    {
                        ...explore,
                        tracable: false,
                    },
                    tags,
                    jsDocTags,
                );
                return config.objector.full
                    ? config.objector.full(condition)(input, expected, explore)
                    : condition;
            }
            const remained: MetadataObject[] = targets.filter(
                (t) => specList.find((s) => s.object === t) === undefined,
            );

            // DO SPECIALIZE
            const condition: ts.IfStatement = specList
                .filter((spec) => spec.property.key.getSoleLiteral() !== null)
                .map((spec, i, array) => {
                    const key: string = spec.property.key.getSoleLiteral()!;
                    const accessor: ts.Expression =
                        IdentifierFactory.access(input)(key);
                    const pred: ts.Expression = spec.neighbour
                        ? config.objector.checker()(
                              accessor,
                              spec.property.value,
                              {
                                  ...explore,
                                  tracable: false,
                                  postfix: IdentifierFactory.postfix(key),
                              },
                              tags,
                              jsDocTags,
                          )
                        : (config.objector.required || ((exp) => exp))(
                              ExpressionFactory.isRequired(accessor),
                          );
                    return ts.factory.createIfStatement(
                        (config.objector.is || ((exp) => exp))(pred),
                        ts.factory.createReturnStatement(
                            config.objector.decoder()(
                                input,
                                spec.object,
                                explore,
                                tags,
                                jsDocTags,
                            ),
                        ),
                        i === array.length - 1
                            ? remained.length
                                ? ts.factory.createReturnStatement(
                                      object(config, level + 1)(
                                          input,
                                          remained,
                                          explore,
                                          tags,
                                          jsDocTags,
                                      ),
                                  )
                                : config.objector.failure(
                                      input,
                                      expected,
                                      explore,
                                  )
                            : undefined,
                    );
                })
                .reverse()
                .reduce((a, b) =>
                    ts.factory.createIfStatement(
                        b.expression,
                        b.thenStatement,
                        a,
                    ),
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
    export const tuple = (
        props: check_union_array_like.IProps<MetadataTuple, MetadataTuple>,
    ) =>
        check_union_array_like<MetadataTuple, MetadataTuple, MetadataTuple>({
            transform: (x) => x,
            element: (x) => x,
            size: null!,
            front: (input) => input,
            array: (input) => input,
            name: (t) => t.name,
        })(props);
    export namespace tuple {
        export type IProps = check_union_array_like.IProps<
            MetadataTuple,
            MetadataTuple
        >;
    }

    export const array = (props: array.IProps) =>
        check_union_array_like<MetadataArray, MetadataArray, Metadata>({
            transform: (x) => x,
            element: (x) => x.value,
            size: (input) => IdentifierFactory.access(input)("length"),
            front: (input) =>
                ts.factory.createElementAccessExpression(input, 0),
            array: (input) => input,
            name: (t) => t.name,
        })(props);
    export namespace array {
        export type IProps = check_union_array_like.IProps<
            MetadataArray,
            Metadata
        >;
    }

    export const array_or_tuple = (props: array_or_tuple.IProps) =>
        check_union_array_like<
            MetadataArray | MetadataTuple,
            MetadataArray | MetadataTuple,
            Metadata | MetadataTuple
        >({
            transform: (x) => x,
            element: (x) => (x instanceof MetadataArray ? x.value : x),
            size: (input) => IdentifierFactory.access(input)("length"),
            front: (input) =>
                ts.factory.createElementAccessExpression(input, 0),
            array: (input) => input,
            name: (m) => m.name,
        })(props);
    export namespace array_or_tuple {
        export type IProps = check_union_array_like.IProps<
            MetadataArray | MetadataTuple,
            Metadata
        >;
    }

    export const set = (props: set.IProps) =>
        check_union_array_like<Metadata, MetadataArray, Metadata>({
            transform: (value: Metadata) =>
                MetadataArray.create({
                    name: `Set<${value.getName()}>`,
                    index: null,
                    recursive: false,
                    nullables: [],
                    value,
                }),
            element: (array) => array.value,
            size: (input) => IdentifierFactory.access(input)("size"),
            front: (input) =>
                IdentifierFactory.access(
                    ts.factory.createCallExpression(
                        IdentifierFactory.access(
                            ts.factory.createCallExpression(
                                IdentifierFactory.access(input)("values"),
                                undefined,
                                undefined,
                            ),
                        )("next"),
                        undefined,
                        undefined,
                    ),
                )("value"),
            array: (input) =>
                ts.factory.createArrayLiteralExpression(
                    [ts.factory.createSpreadElement(input)],
                    false,
                ),
            name: (_m, e) => `Set<${e.getName()}>`,
        })(props);
    export namespace set {
        export type IProps = check_union_array_like.IProps<
            MetadataArray,
            Metadata
        >;
    }

    export const map = (props: map.IProps) =>
        check_union_array_like<
            Metadata.Entry,
            MetadataArray,
            [Metadata, Metadata]
        >({
            element: (array) =>
                array.value.tuples[0]!.elements as [Metadata, Metadata],
            size: (input) => IdentifierFactory.access(input)("size"),
            front: (input) =>
                IdentifierFactory.access(
                    ts.factory.createCallExpression(
                        IdentifierFactory.access(
                            ts.factory.createCallExpression(
                                IdentifierFactory.access(input)("entries"),
                                undefined,
                                undefined,
                            ),
                        )("next"),
                        undefined,
                        undefined,
                    ),
                )("value"),
            array: (input) =>
                ts.factory.createArrayLiteralExpression(
                    [ts.factory.createSpreadElement(input)],
                    false,
                ),
            name: (_m, [k, v]) => `Map<${k.getName()}, ${v.getName()}>`,
            transform: (m: Metadata.Entry) =>
                MetadataArray.create({
                    name: `Map<${m.key.getName()}, ${m.value.getName()}>`,
                    index: null,
                    recursive: false,
                    nullables: [],
                    value: Metadata.create({
                        ...Metadata.initialize(),
                        tuples: [
                            MetadataTuple.create({
                                name: `[${m.key.getName()}, ${m.value.getName()}]`,
                                index: null,
                                recursive: false,
                                nullables: [],
                                elements: [m.key, m.value],
                            }),
                        ],
                    }),
                }),
        })(props);

    export namespace map {
        export type IProps = check_union_array_like.IProps<
            MetadataArray,
            [Metadata, Metadata]
        >;
    }
}
