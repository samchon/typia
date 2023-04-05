import ts from "typescript";

import { ExpressionFactory } from "../../factories/ExpressionFactory";
import { LiteralFactory } from "../../factories/LiteralFactory";

import { ICommentTag } from "../../metadata/ICommentTag";

import { Customizable } from "../../typings/Customizable";

/**
 * @internal
 */
export const random_custom =
    (accessor: (name: string) => ts.Expression) =>
    (type: keyof Customizable) =>
    (comments: ICommentTag[]) =>
    (expression: ts.Expression) =>
        ExpressionFactory.coalesce(
            ts.factory.createCallChain(
                ts.factory.createPropertyAccessChain(
                    accessor("customs"),
                    ts.factory.createToken(ts.SyntaxKind.QuestionDotToken),
                    ts.factory.createIdentifier(type),
                ),
                ts.factory.createToken(ts.SyntaxKind.QuestionDotToken),
                undefined,
                [LiteralFactory.generate(comments)],
            ),
            expression,
        );
