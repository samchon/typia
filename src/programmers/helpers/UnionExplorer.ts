import ts from "typescript";
import { ExpressionFactory } from "../../factories/ExpressionFactory";
import { IdentifierFactory } from "../../factories/IdentifierFactory";
import { StatementFactory } from "../../factories/StatementFactory";
import { IMetadataTag } from "../../metadata/IMetadataTag";
import { Metadata } from "../../metadata/Metadata";
import { MetadataObject } from "../../metadata/MetadataObject";
import { FeatureProgrammer } from "../FeatureProgrammer";
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

    export function object(
        config: FeatureProgrammer.IConfig,
        checker: (
            input: ts.Expression,
            metadata: Metadata,
            explore: FeatureProgrammer.IExplore,
            tags: IMetadataTag[],
        ) => ts.Expression,
        decoder: Decoder<MetadataObject>,
        combiner: ObjectCombiner,
        failure: (
            input: ts.Expression,
            targets: MetadataObject[],
        ) => ts.Statement,
        level: number = 0,
    ) {
        return function (
            input: ts.Expression,
            targets: MetadataObject[],
            explore: FeatureProgrammer.IExplore,
            tags: IMetadataTag[],
        ): ts.Expression {
            // BREAKER
            if (targets.length === 1)
                return decoder(input, targets[0]!, explore, tags);

            // POSSIBLE TO SPECIALIZE?
            const specList = UnionPredicator.object(targets);
            if (specList.length === 0)
                return combiner(
                    input,
                    targets,
                    {
                        ...explore,
                        tracable: false,
                    },
                    tags,
                );
            const remained: MetadataObject[] = targets.filter(
                (t) => specList.find((s) => s.object === t) === undefined,
            );

            // DO SPECIALIZE
            const conditions: ts.IfStatement[] = specList.map((spec) => {
                const accessor: ts.Expression = IdentifierFactory.join(
                    input,
                    spec.property.name,
                );
                const pred: ts.Expression = spec.neighbour
                    ? checker(
                          accessor,
                          spec.property.metadata,
                          {
                              ...explore,
                              tracable: false,
                              postfix: IdentifierFactory.postfix(
                                  spec.property.name,
                              ),
                          },
                          tags,
                      )
                    : ExpressionFactory.isRequired(accessor);
                return ts.factory.createIfStatement(
                    pred,
                    ts.factory.createReturnStatement(
                        decoder(input, spec.object, explore, tags),
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
                                      object(
                                          config,
                                          checker,
                                          decoder,
                                          combiner,
                                          failure,
                                          level + 1,
                                      )(input, remained, explore, tags),
                                  )
                                : failure(input, targets),
                        ],
                        true,
                    ),
                ),
                undefined,
                undefined,
            );
        };
    }

    export function array(
        checker: (
            input: ts.Expression,
            metadata: Metadata,
            explore: FeatureProgrammer.IExplore,
            tags: IMetadataTag[],
        ) => ts.Expression,
        decoder: Decoder<Metadata>,
        empty: () => ts.Expression,
        failure: (input: ts.Expression, targets: Metadata[]) => ts.Statement,
    ) {
        return function (
            input: ts.Expression,
            targets: Metadata[],
            explore: FeatureProgrammer.IExplore,
            tags: IMetadataTag[],
        ): ts.Expression {
            if (targets.length === 1)
                return decoder(input, targets[0]!, explore, tags);

            const top = ts.factory.createElementAccessExpression(input, 0);

            //----
            // LIST UP VARIABLES
            //----
            // TUPLES
            const tupleListVariable: ts.VariableStatement =
                StatementFactory.variable(
                    ts.NodeFlags.Const,
                    "tupleList",
                    ts.factory.createArrayLiteralExpression(
                        targets.map((meta) =>
                            ts.factory.createArrayLiteralExpression([
                                ts.factory.createArrowFunction(
                                    undefined,
                                    undefined,
                                    [
                                        ts.factory.createParameterDeclaration(
                                            undefined,
                                            undefined,
                                            undefined,
                                            "branch",
                                        ),
                                    ],
                                    undefined,
                                    undefined,
                                    checker(
                                        ts.factory.createIdentifier("branch"),
                                        meta,
                                        {
                                            ...explore,
                                            tracable: false,
                                            postfix: `"[0]"`,
                                        },
                                        tags,
                                    ),
                                ),
                                ts.factory.createArrowFunction(
                                    undefined,
                                    undefined,
                                    [
                                        ts.factory.createParameterDeclaration(
                                            undefined,
                                            undefined,
                                            undefined,
                                            "branch",
                                        ),
                                    ],
                                    undefined,
                                    undefined,
                                    decoder(
                                        ts.factory.createIdentifier("branch"),
                                        meta,
                                        {
                                            ...explore,
                                            tracable: false,
                                        },
                                        tags,
                                    ),
                                ),
                            ]),
                        ),
                    ),
                );

            // FILTERED TUPLES
            const filteredVariable = StatementFactory.variable(
                ts.NodeFlags.Const,
                "filtered",
                ts.factory.createCallExpression(
                    ts.factory.createIdentifier("tupleList.filter"),
                    undefined,
                    [
                        ts.factory.createArrowFunction(
                            undefined,
                            undefined,
                            [
                                ts.factory.createParameterDeclaration(
                                    undefined,
                                    undefined,
                                    undefined,
                                    "tuple",
                                ),
                            ],
                            undefined,
                            undefined,
                            ts.factory.createStrictEquality(
                                ts.factory.createTrue(),
                                ts.factory.createCallExpression(
                                    ts.factory.createIdentifier("tuple[0]"),
                                    undefined,
                                    [top],
                                ),
                            ),
                        ),
                    ],
                ),
            );

            //----
            // STATEMENTS
            //----
            // ONLY ONE TYPE
            const uniqueStatement = ts.factory.createIfStatement(
                ts.factory.createStrictEquality(
                    ts.factory.createNumericLiteral(1),
                    ts.factory.createIdentifier("filtered.length"),
                ),
                ts.factory.createReturnStatement(
                    ts.factory.createCallExpression(
                        ts.factory.createIdentifier("filtered[0][1]"),
                        undefined,
                        [input],
                    ),
                ),
            );

            // UNION TYPE
            const forOfStatement = ts.factory.createForOfStatement(
                undefined,
                ts.factory.createVariableDeclarationList(
                    [ts.factory.createVariableDeclaration("tuple")],
                    ts.NodeFlags.Const,
                ),
                // StatementFactory.variable(ts.NodeFlags.Const, "tuple"),
                ts.factory.createIdentifier("filtered"),
                ts.factory.createIfStatement(
                    ts.factory.createCallExpression(
                        IdentifierFactory.join(input, "every"),
                        undefined,
                        [
                            ts.factory.createArrowFunction(
                                undefined,
                                undefined,
                                [
                                    ts.factory.createParameterDeclaration(
                                        undefined,
                                        undefined,
                                        undefined,
                                        "value",
                                    ),
                                ],
                                undefined,
                                undefined,
                                ts.factory.createCallExpression(
                                    ts.factory.createIdentifier("tuple[0]"),
                                    undefined,
                                    [ts.factory.createIdentifier("value")],
                                ),
                            ),
                        ],
                    ),
                    ts.factory.createReturnStatement(
                        ts.factory.createCallExpression(
                            ts.factory.createIdentifier("tuple[1]"),
                            undefined,
                            [input],
                        ),
                    ),
                ),
            );
            const unionStatement = ts.factory.createIfStatement(
                ts.factory.createLessThan(
                    ts.factory.createNumericLiteral(1),
                    ts.factory.createIdentifier("filtered.length"),
                ),
                forOfStatement,
            );

            const block = [
                // ARRAY.LENGTH := 0
                ts.factory.createIfStatement(
                    ts.factory.createStrictEquality(
                        ts.factory.createNumericLiteral(0),
                        IdentifierFactory.join(input, "length"),
                    ),
                    ts.factory.createReturnStatement(empty()),
                ),
                // VARIABLES
                tupleListVariable,
                filteredVariable,

                // CONDITIONAL STATEMENTS
                uniqueStatement,
                unionStatement,
                failure(input, targets),
            ];

            return ts.factory.createCallExpression(
                ts.factory.createArrowFunction(
                    undefined,
                    undefined,
                    [],
                    undefined,
                    undefined,
                    ts.factory.createBlock(block, true),
                ),
                undefined,
                undefined,
            );
        };
    }
}
