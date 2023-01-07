import ts from "typescript";

import { ExpressionFactory } from "../../factories/ExpressionFactory";
import { IdentifierFactory } from "../../factories/IdentifierFactory";

import { IMetadataTag } from "../../metadata/IMetadataTag";
import { Metadata } from "../../metadata/Metadata";
import { MetadataObject } from "../../metadata/MetadataObject";

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
        ): ts.Expression => {
            // BREAKER
            if (targets.length === 1)
                return config.objector.decoder(
                    input,
                    targets[0]!,
                    explore,
                    tags,
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
                );
                return config.objector.full
                    ? config.objector.full(condition)(input, expected, explore)
                    : condition;
            }
            const remained: MetadataObject[] = targets.filter(
                (t) => specList.find((s) => s.object === t) === undefined,
            );

            // DO SPECIALIZE
            const conditions: ts.IfStatement[] = specList
                .filter((spec) => spec.property.key.getSoleLiteral() !== null)
                .map((spec) => {
                    const key: string = spec.property.key.getSoleLiteral()!;
                    const accessor: ts.Expression = IdentifierFactory.join(
                        input,
                        key,
                    );
                    const pred: ts.Expression = spec.neighbour
                        ? config.objector.checker(
                              accessor,
                              spec.property.value,
                              {
                                  ...explore,
                                  tracable: false,
                                  postfix: IdentifierFactory.postfix(key),
                              },
                              tags,
                          )
                        : (config.objector.required || ((exp) => exp))(
                              ExpressionFactory.isRequired(accessor),
                          );
                    return ts.factory.createIfStatement(
                        (config.objector.is || ((exp) => exp))(pred),
                        ts.factory.createReturnStatement(
                            config.objector.decoder(
                                input,
                                spec.object,
                                explore,
                                tags,
                            ),
                        ),
                    );
                });

            // RETURNS WITH CONDITIONS
            return ts.factory.createCallExpression(
                ts.factory.createArrowFunction(
                    undefined,
                    undefined,
                    [],
                    undefined,
                    undefined,
                    ts.factory.createBlock(
                        [
                            ...conditions,
                            remained.length
                                ? ts.factory.createReturnStatement(
                                      object(config, level + 1)(
                                          input,
                                          remained,
                                          explore,
                                          tags,
                                      ),
                                  )
                                : config.objector.failure(
                                      input,
                                      expected,
                                      explore,
                                  ),
                        ],
                        true,
                    ),
                ),
                undefined,
                undefined,
            );
        };

    /* -----------------------------------------------------------
        ARRAY LIKE
    ----------------------------------------------------------- */
    export const tuple = (props: check_union_array_like.IProps<Metadata[]>) =>
        check_union_array_like<Metadata[]>({
            size: null,
            front: (input) => input,
            array: (input) => input,
            name: (elems) => `[${elems.map((e) => e.getName()).join(", ")}]`,
        })(props);
    export namespace tuple {
        export type IProps = check_union_array_like.IProps<
            Metadata | Metadata[]
        >;
    }

    export const array = (props: array.IProps) =>
        check_union_array_like<Metadata>({
            size: (input) => IdentifierFactory.join(input, "length"),
            front: (input) =>
                ts.factory.createElementAccessExpression(input, 0),
            array: (input) => input,
            name: (t) => `Array<${t.getName()}>`,
        })(props);
    export namespace array {
        export type IProps = check_union_array_like.IProps<Metadata>;
    }

    export const array_or_tuple = (props: array_or_tuple.IProps) =>
        check_union_array_like<Metadata | Metadata[]>({
            size: (input) => IdentifierFactory.join(input, "length"),
            front: (input) =>
                ts.factory.createElementAccessExpression(input, 0),
            array: (input) => input,
            name: (t) =>
                Array.isArray(t)
                    ? `[${t.map((e) => e.getName()).join(", ")}]`
                    : `Array<${t.getName()}>`,
        })(props);
    export namespace array_or_tuple {
        export type IProps = check_union_array_like.IProps<
            Metadata | Metadata[]
        >;
    }

    export const set = (props: set.IProps) =>
        check_union_array_like<Metadata>({
            size: (input) => IdentifierFactory.join(input, "size"),
            front: (input) =>
                IdentifierFactory.join(
                    ts.factory.createCallExpression(
                        IdentifierFactory.join(
                            ts.factory.createCallExpression(
                                IdentifierFactory.join(input, "values"),
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
            name: (t) => `Set<${t.getName()}>`,
        })(props);
    export namespace set {
        export type IProps = check_union_array_like.IProps<Metadata>;
    }

    export const map = (props: map.IProps) =>
        check_union_array_like<[Metadata, Metadata]>({
            size: (input) => IdentifierFactory.join(input, "size"),
            front: (input) =>
                IdentifierFactory.join(
                    ts.factory.createCallExpression(
                        IdentifierFactory.join(
                            ts.factory.createCallExpression(
                                IdentifierFactory.join(input, "entries"),
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
            name: ([k, v]) => `Map<${k.getName()}, ${v.getName()}>`,
        })(props);

    export namespace map {
        export type IProps = check_union_array_like.IProps<
            [Metadata, Metadata]
        >;
    }

    // const transform = <T>(
    //     props: check_union_array_like.IProps<T>,
    // ): check_union_array_like.IProps<T> => ({
    //     ...props,
    //     checker: (top, targets, explore, tags, array) =>
    //         props.checker(
    //             top,
    //             targets,
    //             {
    //                 ...explore,
    //                 tracable: false,
    //                 postfix: `"[0]"`,
    //             },
    //             tags,
    //             array,
    //         ),
    //     decoder: (input, targets, explore, tags) =>
    //         props.decoder(
    //             input,
    //             targets,
    //             {
    //                 ...explore,
    //                 tracable: true,
    //             },
    //             tags,
    //         ),
    // });
}
