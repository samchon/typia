import ts from "typescript";

import { StatementFactory } from "../../factories/StatementFactory";
import { TypeFactory } from "../../factories/TypeFactory";

import { ICommentTag } from "../../metadata/ICommentTag";
import { IMetadataTag } from "../../metadata/IMetadataTag";
import { Metadata } from "../../metadata/Metadata";
import { MetadataObject } from "../../metadata/MetadataObject";
import { MetadataProperty } from "../../metadata/MetadataProperty";

import { Escaper } from "../../utils/Escaper";

import { get_comment_tags } from "../internal/get_comment_tags";

export namespace RandomJoiner {
    export type Decoder = (
        meta: Metadata,
        tags: IMetadataTag[],
        comments: ICommentTag[],
    ) => ts.Expression;

    export const array =
        (coalesce: (method: string) => ts.Expression) =>
        (decoder: Decoder) =>
        (explore: IExplore) =>
        (length: ts.Expression | undefined) =>
        (
            item: Metadata,
            tags: IMetadataTag[],
            comments: ICommentTag[],
        ): ts.Expression => {
            const generator: ts.Expression = ts.factory.createCallExpression(
                coalesce("array"),
                undefined,
                [
                    ts.factory.createArrowFunction(
                        undefined,
                        undefined,
                        [],
                        undefined,
                        undefined,
                        decoder(item, tags, comments),
                    ),
                    ...(length ? [length] : []),
                ],
            );
            if (explore.recursive === false) return generator;
            return ts.factory.createConditionalExpression(
                ts.factory.createGreaterThanEquals(
                    ts.factory.createNumericLiteral(5),
                    ts.factory.createIdentifier("_depth"),
                ),
                undefined,
                generator,
                undefined,
                ts.factory.createArrayLiteralExpression([]),
            );
        };

    export const tuple =
        (decoder: Decoder) =>
        (items: Metadata[], tags: IMetadataTag[], comments: ICommentTag[]) =>
            ts.factory.createArrayLiteralExpression(
                items.map((i) => decoder(i.rest ?? i, tags, comments)),
                true,
            );

    export const object =
        (coalesce: (method: string) => ts.Expression) =>
        (decoder: Decoder) =>
        (obj: MetadataObject): ts.ConciseBody => {
            if (obj.properties.length === 0)
                return ts.factory.createIdentifier("{}");

            // LIST UP PROPERTIES
            const regular = obj.properties.filter((p) => p.key.isSoleLiteral());
            const dynamic = obj.properties.filter(
                (p) => !p.key.isSoleLiteral(),
            );

            // REGULAR OBJECT
            const literal: ts.ObjectLiteralExpression =
                ts.factory.createObjectLiteralExpression(
                    regular.map((p) => {
                        const str: string = p.key.getSoleLiteral()!;
                        return ts.factory.createPropertyAssignment(
                            Escaper.variable(str)
                                ? str
                                : ts.factory.createStringLiteral(str),
                            decoder(
                                p.value,
                                p.tags,
                                get_comment_tags(false)(p.jsDocTags),
                            ),
                        );
                    }),
                    true,
                );
            if (dynamic.length === 0) return literal;

            const properties: ts.Statement[] = dynamic.map((p) =>
                ts.factory.createExpressionStatement(
                    dynamicProperty(coalesce)(decoder)(p),
                ),
            );
            return ts.factory.createBlock(
                [
                    StatementFactory.constant(
                        "output",
                        ts.factory.createAsExpression(
                            literal,
                            TypeFactory.keyword("any"),
                        ),
                    ),
                    ...(obj.recursive
                        ? [
                              ts.factory.createIfStatement(
                                  ts.factory.createGreaterThanEquals(
                                      ts.factory.createNumericLiteral(5),
                                      ts.factory.createIdentifier("_depth"),
                                  ),
                                  ts.factory.createBlock(properties, true),
                              ),
                          ]
                        : properties),
                    ts.factory.createReturnStatement(
                        ts.factory.createIdentifier("output"),
                    ),
                ],
                true,
            );
        };

    const dynamicProperty =
        (coalesce: (method: string) => ts.Expression) =>
        (decoder: Decoder) =>
        (p: MetadataProperty) =>
            ts.factory.createCallExpression(coalesce("array"), undefined, [
                ts.factory.createArrowFunction(
                    undefined,
                    undefined,
                    [],
                    undefined,
                    undefined,
                    ts.factory.createBinaryExpression(
                        ts.factory.createElementAccessExpression(
                            ts.factory.createIdentifier("output"),
                            decoder(p.key, [], []),
                        ),
                        ts.factory.createToken(ts.SyntaxKind.EqualsToken),
                        decoder(
                            p.value,
                            p.tags,
                            get_comment_tags(false)(p.jsDocTags),
                        ),
                    ),
                ),
                ts.factory.createCallExpression(
                    coalesce("integer"),
                    undefined,
                    [
                        ts.factory.createNumericLiteral(0),
                        ts.factory.createNumericLiteral(3),
                    ],
                ),
            ]);
}

interface IExplore {
    function: boolean;
    recursive: boolean;
}
