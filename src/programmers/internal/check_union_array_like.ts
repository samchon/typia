import ts from "typescript";

import { IdentifierFactory } from "../../factories/IdentifierFactory";
import { StatementFactory } from "../../factories/StatementFactory";
import { TypeFactory } from "../../factories/TypeFactory";

import { IMetadataTag } from "../../metadata/IMetadataTag";

import { CheckerProgrammer } from "../CheckerProgrammer";
import { FeatureProgrammer } from "../FeatureProgrammer";
import { UnionExplorer } from "../helpers/UnionExplorer";

/**
 * @internal
 */
export const check_union_array_like =
    <Origin, Meta, Elem>(
        accessor: check_union_array_like.IAccessor<Origin, Meta, Elem>,
    ) =>
    (props: check_union_array_like.IProps<Meta, Elem>) =>
    (
        input: ts.Expression,
        origins: Origin[],
        explore: FeatureProgrammer.IExplore,
        tags: IMetadataTag[],
        jsDocTags: ts.JSDocTagInfo[],
    ) => {
        // ONLY ONE TYPE
        const targets: Meta[] = origins.map(accessor.transform);
        if (targets.length === 1)
            return props.decoder(
                accessor.array(input),
                targets[0]!,
                explore,
                tags,
                jsDocTags,
            );

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
                                [
                                    IdentifierFactory.parameter(
                                        "top",
                                        TypeFactory.keyword("any"),
                                    ),
                                ],
                                undefined,
                                undefined,
                                props.checker(
                                    ts.factory.createIdentifier("top"),
                                    accessor.element(meta),
                                    {
                                        ...explore,
                                        tracable: false,
                                        postfix: `"[0]"`,
                                    },
                                    tags,
                                    jsDocTags,
                                    input,
                                ),
                            ),
                            ts.factory.createArrowFunction(
                                undefined,
                                undefined,
                                [
                                    IdentifierFactory.parameter(
                                        "top",
                                        TypeFactory.keyword("any"),
                                    ),
                                ],
                                undefined,
                                undefined,
                                props.decoder(
                                    ts.factory.createIdentifier("top"),
                                    meta,
                                    {
                                        ...explore,
                                        tracable: true,
                                    },
                                    tags,
                                    jsDocTags,
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
                            props.success,
                            ts.factory.createCallExpression(
                                ts.factory.createIdentifier("tuple[0]"),
                                undefined,
                                [ts.factory.createIdentifier("front")],
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
                    [accessor.array(input)],
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
                    IdentifierFactory.access(
                        ts.factory.createIdentifier("array"),
                    )("every"),
                    undefined,
                    [
                        ts.factory.createArrowFunction(
                            undefined,
                            undefined,
                            [
                                IdentifierFactory.parameter(
                                    "value",
                                    TypeFactory.keyword("any"),
                                ),
                            ],
                            undefined,
                            undefined,
                            ts.factory.createStrictEquality(
                                props.success,
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
                        [ts.factory.createIdentifier("array")],
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
            ...(accessor.size !== null
                ? [
                      ts.factory.createIfStatement(
                          ts.factory.createStrictEquality(
                              ts.factory.createNumericLiteral(0),
                              accessor.size(input),
                          ),
                          ts.isReturnStatement(props.empty)
                              ? props.empty
                              : ts.factory.createReturnStatement(props.empty),
                      ),
                  ]
                : []),

            // UNION PREDICATORS
            tupleListVariable,
            StatementFactory.constant("front", accessor.front(input)),
            filteredVariable,
            uniqueStatement,

            // CONDITIONAL STATEMENTS
            StatementFactory.constant("array", accessor.array(input)),
            unionStatement,
            props.failure(
                input,
                `(${targets
                    .map((t) => accessor.name(t, accessor.element(t)))
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

/**
 * @internal
 */
export namespace check_union_array_like {
    export interface IProps<Meta, Elem> {
        checker(
            front: ts.Expression,
            target: Elem,
            explore: FeatureProgrammer.IExplore,
            tags: IMetadataTag[],
            jsDocTags: ts.JSDocTagInfo[],
            container: ts.Expression,
        ): ts.Expression;
        decoder: UnionExplorer.Decoder<Meta>;
        empty: ts.ReturnStatement | ts.Expression;
        success: ts.Expression;
        failure(
            input: ts.Expression,
            expected: string,
            explore: CheckerProgrammer.IExplore,
        ): ts.Statement;
    }

    export interface IAccessor<Origin, Meta, Elem> {
        transform(origin: Origin): Meta;
        element(meta: Meta): Elem;
        name(meta: Meta, elem: Elem): string;
        front(input: ts.Expression): ts.Expression;
        array(input: ts.Expression): ts.Expression;
        size: null | ((input: ts.Expression) => ts.Expression);
    }
}
