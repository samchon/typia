import ts from "typescript";

import { ExpressionFactory } from "../../factories/ExpressionFactory";
import { IdentifierFactory } from "../../factories/IdentifierFactory";
import { StatementFactory } from "../../factories/StatementFactory";

import { IMetadataTag } from "../../metadata/IMetadataTag";
import { Metadata } from "../../metadata/Metadata";
import { MetadataObject } from "../../metadata/MetadataObject";

import { CheckerProgrammer } from "../CheckerProgrammer";
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
    }

    export function array(
        checker: (
            input: ts.Expression,
            metadata: Metadata,
            explore: FeatureProgrammer.IExplore,
            tags: IMetadataTag[],
        ) => ts.Expression,
        decoder: Decoder<Metadata>,
        empty: ts.Expression,
        success: ts.Expression,
        failure: (
            input: ts.Expression,
            expected: string,
            explore: CheckerProgrammer.IExplore,
        ) => ts.Statement,
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
                StatementFactory.constant(
                    "tupleList",
                    ts.factory.createArrayLiteralExpression(
                        targets.map((meta) =>
                            ts.factory.createArrayLiteralExpression([
                                ts.factory.createArrowFunction(
                                    undefined,
                                    undefined,
                                    [IdentifierFactory.parameter("branch")],
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
                                    [IdentifierFactory.parameter("branch")],
                                    undefined,
                                    undefined,
                                    decoder(
                                        ts.factory.createIdentifier("branch"),
                                        meta,
                                        {
                                            ...explore,
                                            tracable: true,
                                        },
                                        tags,
                                    ),
                                ),
                            ]),
                        ),
                    ),
                );

            // FILTERED TUPLES
            const filteredVariable = StatementFactory.constant(
                "filtered",
                ts.factory.createCallExpression(
                    ts.factory.createIdentifier("tupleList.filter"),
                    undefined,
                    [
                        ts.factory.createArrowFunction(
                            undefined,
                            undefined,
                            [IdentifierFactory.parameter("tuple")],
                            undefined,
                            undefined,
                            ts.factory.createStrictEquality(
                                success,
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
                        ts.factory.createIdentifier(`filtered[0][1]`),
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
                                [IdentifierFactory.parameter("value")],
                                undefined,
                                undefined,
                                ts.factory.createStrictEquality(
                                    success,
                                    ts.factory.createCallExpression(
                                        ts.factory.createIdentifier("tuple[0]"),
                                        undefined,
                                        [ts.factory.createIdentifier("value")],
                                    ),
                                ),
                            ),
                        ],
                    ),
                    ts.factory.createReturnStatement(
                        ts.factory.createCallExpression(
                            ts.factory.createIdentifier(`tuple[1]`),
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
                    ts.factory.createReturnStatement(empty),
                ),
                // VARIABLES
                tupleListVariable,
                filteredVariable,

                // CONDITIONAL STATEMENTS
                uniqueStatement,
                unionStatement,
                failure(
                    input,
                    `(${targets
                        .map((t) => `Array<${t.getName()}>`)
                        .join(" | ")})`,
                    explore,
                ),
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
