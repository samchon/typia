import ts from "typescript";

import { IdentifierFactory } from "../../factories/IdentifierFactory";
import { StatementFactory } from "../../factories/StatementFactory";
import { TypeFactory } from "../../factories/TypeFactory";

import { MetadataArray } from "../../schemas/metadata/MetadataArray";
import { MetadataArrayType } from "../../schemas/metadata/MetadataArrayType";
import { MetadataTuple } from "../../schemas/metadata/MetadataTuple";

import { CheckerProgrammer } from "../CheckerProgrammer";
import { FeatureProgrammer } from "../FeatureProgrammer";
import { UnionExplorer } from "../helpers/UnionExplorer";

/**
 * @internal
 */
export const check_union_array_like =
    <Origin, Category extends MetadataArray | MetadataTuple, Element>(
        accessor: check_union_array_like.IAccessor<Origin, Category, Element>,
    ) =>
    (props: check_union_array_like.IProps<Category, Element>) =>
    (parameters: ts.ParameterDeclaration[]) =>
    (
        input: ts.Expression,
        origins: Origin[],
        explore: FeatureProgrammer.IExplore,
    ): ts.ArrowFunction => {
        // ONLY ONE TYPE
        const targets: Array<Category> = origins.map(accessor.transform);
        if (targets.length === 1)
            return ts.factory.createArrowFunction(
                undefined,
                undefined,
                parameters,
                undefined,
                undefined,
                props.decoder(accessor.array(input), targets[0]!, explore),
            );

        const array = ts.factory.createIdentifier("array");
        const top = ts.factory.createIdentifier("top");

        const statements: ts.Statement[] = [];
        const tupleList: MetadataTuple[] = targets.filter(
            (t) => t instanceof MetadataTuple,
        ) as MetadataTuple[];
        const arrayList: MetadataArray[] = targets.filter(
            (t) => t instanceof MetadataArray,
        ) as MetadataArray[];

        const predicate = (meta: Category): ts.Expression =>
            ts.factory.createAsExpression(
                ts.factory.createArrayLiteralExpression(
                    [
                        ts.factory.createArrowFunction(
                            undefined,
                            undefined,
                            [
                                IdentifierFactory.parameter(
                                    "top",
                                    meta instanceof MetadataArrayType
                                        ? TypeFactory.keyword("any")
                                        : ts.factory.createTypeReferenceNode(
                                              "any[]",
                                          ),
                                ),
                            ],
                            TypeFactory.keyword("any"),
                            undefined,
                            props.checker(
                                ts.factory.createIdentifier("top"),
                                accessor.element(meta),
                                {
                                    ...explore,
                                    tracable: false,
                                    postfix:
                                        meta instanceof MetadataArrayType
                                            ? `"[0]"`
                                            : "",
                                },
                                array,
                            ),
                        ),
                        ts.factory.createArrowFunction(
                            undefined,
                            undefined,
                            [
                                IdentifierFactory.parameter(
                                    "entire",
                                    ts.factory.createTypeReferenceNode("any[]"),
                                ),
                            ],
                            TypeFactory.keyword("any"),
                            undefined,
                            props.decoder(
                                ts.factory.createIdentifier("entire"),
                                meta,
                                {
                                    ...explore,
                                    tracable: true,
                                },
                            ),
                        ),
                    ],
                    true,
                ),
                ts.factory.createTypeReferenceNode("const"),
            );
        const iterate =
            (init: string) =>
            (from: ts.Expression) =>
            (stmt: ts.Statement): ts.ForOfStatement =>
                ts.factory.createForOfStatement(
                    undefined,
                    ts.factory.createVariableDeclarationList(
                        [ts.factory.createVariableDeclaration(init)],
                        ts.NodeFlags.Const,
                    ),
                    from,
                    stmt,
                );

        if (tupleList.length)
            statements.push(
                StatementFactory.constant("array", accessor.array(input)),
                StatementFactory.constant(
                    "tuplePredicators",
                    ts.factory.createArrayLiteralExpression(
                        tupleList.map((x) => predicate(x as Category)),
                        true,
                    ),
                ),
                iterate("pred")(
                    ts.factory.createIdentifier("tuplePredicators"),
                )(
                    ts.factory.createIfStatement(
                        ts.factory.createCallExpression(
                            ts.factory.createIdentifier("pred[0]"),
                            undefined,
                            [array],
                        ),
                        ts.factory.createReturnStatement(
                            ts.factory.createCallExpression(
                                ts.factory.createIdentifier(`pred[1]`),
                                undefined,
                                [array],
                            ),
                        ),
                    ),
                ),
            );
        if (arrayList.length) {
            if (tupleList.length === 0)
                statements.push(
                    StatementFactory.constant("array", accessor.array(input)),
                );
            statements.push(
                StatementFactory.constant("top", accessor.front(input)),
                ts.factory.createIfStatement(
                    ts.factory.createStrictEquality(
                        ts.factory.createNumericLiteral(0),
                        accessor.size(input),
                    ),
                    ts.isReturnStatement(props.empty)
                        ? props.empty
                        : ts.factory.createReturnStatement(props.empty),
                ),
                StatementFactory.constant(
                    "arrayPredicators",
                    ts.factory.createArrayLiteralExpression(
                        arrayList.map((x) => predicate(x as Category)),
                        true,
                    ),
                ),
                StatementFactory.constant(
                    "passed",
                    ts.factory.createCallExpression(
                        IdentifierFactory.access(
                            ts.factory.createIdentifier("arrayPredicators"),
                        )("filter"),
                        undefined,
                        [
                            ts.factory.createArrowFunction(
                                undefined,
                                undefined,
                                [IdentifierFactory.parameter("pred")],
                                undefined,
                                undefined,
                                ts.factory.createCallExpression(
                                    ts.factory.createIdentifier("pred[0]"),
                                    undefined,
                                    [top],
                                ),
                            ),
                        ],
                    ),
                ),
                ts.factory.createIfStatement(
                    ts.factory.createStrictEquality(
                        ts.factory.createNumericLiteral(1),
                        ts.factory.createIdentifier("passed.length"),
                    ),
                    ts.factory.createReturnStatement(
                        ts.factory.createCallExpression(
                            ts.factory.createElementAccessExpression(
                                ts.factory.createNonNullExpression(
                                    ts.factory.createIdentifier("passed[0]"),
                                ),
                                1,
                            ),
                            undefined,
                            [array],
                        ),
                    ),
                    ts.factory.createIfStatement(
                        ts.factory.createLessThan(
                            ts.factory.createNumericLiteral(1),
                            ts.factory.createIdentifier("passed.length"),
                        ),
                        iterate("pred")(ts.factory.createIdentifier("passed"))(
                            ts.factory.createIfStatement(
                                ts.factory.createCallExpression(
                                    IdentifierFactory.access(array)("every"),
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
                                                    ts.factory.createIdentifier(
                                                        "pred[0]",
                                                    ),
                                                    undefined,
                                                    [
                                                        ts.factory.createIdentifier(
                                                            "value",
                                                        ),
                                                    ],
                                                ),
                                            ),
                                        ),
                                    ],
                                ),
                                ts.factory.createReturnStatement(
                                    ts.factory.createCallExpression(
                                        ts.factory.createIdentifier(`pred[1]`),
                                        undefined,
                                        [ts.factory.createIdentifier("array")],
                                    ),
                                ),
                            ),
                        ),
                    ),
                ),
            );
        }
        statements.push(
            props.failure(
                input,
                `(${targets
                    .map((t) => accessor.name(t, accessor.element(t)))
                    .join(" | ")})`,
                explore,
            ),
        );
        return ts.factory.createArrowFunction(
            undefined,
            undefined,
            parameters,
            undefined,
            undefined,
            ts.factory.createBlock(statements, true),
        );
    };

/**
 * @internal
 */
export namespace check_union_array_like {
    export interface IProps<
        Category extends MetadataArray | MetadataTuple,
        Element,
    > {
        checker(
            front: ts.Expression,
            target: Element,
            explore: FeatureProgrammer.IExplore,
            container: ts.Expression,
        ): ts.Expression;
        decoder: UnionExplorer.Decoder<Category>;
        empty: ts.ReturnStatement | ts.Expression;
        success: ts.Expression;
        failure(
            input: ts.Expression,
            expected: string,
            explore: CheckerProgrammer.IExplore,
        ): ts.Statement;
    }

    export interface IAccessor<
        Origin,
        Category extends MetadataArray | MetadataTuple,
        Element,
    > {
        transform(origin: Origin): Category;
        element(meta: Category): Element;
        name(meta: Category, elem: Element): string;
        front(input: ts.Expression): ts.Expression;
        array(input: ts.Expression): ts.Expression;
        size(input: ts.Expression): ts.Expression;
    }
}
