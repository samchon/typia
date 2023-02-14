import ts from "typescript";

export namespace ExpressionFactory {
    export function isRequired(input: ts.Expression): ts.Expression {
        return ts.factory.createStrictInequality(
            ts.factory.createIdentifier("undefined"),
            input,
        );
    }

    export function isArray(input: ts.Expression): ts.Expression {
        return ts.factory.createCallExpression(
            ts.factory.createIdentifier("Array.isArray"),
            undefined,
            [input],
        );
    }

    export function isObject(
        input: ts.Expression,
        options: {
            checkNull: boolean;
            checkArray: boolean;
        },
    ): ts.Expression {
        const conditions: ts.Expression[] = [
            ts.factory.createStrictEquality(
                ts.factory.createStringLiteral("object"),
                ts.factory.createTypeOfExpression(input),
            ),
        ];
        if (options.checkNull === true)
            conditions.push(
                ts.factory.createStrictInequality(
                    ts.factory.createNull(),
                    input,
                ),
            );
        if (options.checkArray === true)
            conditions.push(
                ts.factory.createStrictEquality(
                    ts.factory.createFalse(),
                    ts.factory.createCallExpression(
                        ts.factory.createIdentifier("Array.isArray"),
                        undefined,
                        [input],
                    ),
                ),
            );

        return conditions.length === 1
            ? conditions[0]!
            : conditions.reduce((x, y) => ts.factory.createLogicalAnd(x, y));
    }

    export function isInstanceOf(
        input: ts.Expression,
        type: string,
    ): ts.Expression {
        return ts.factory.createBinaryExpression(
            input,
            ts.factory.createToken(ts.SyntaxKind.InstanceOfKeyword),
            ts.factory.createIdentifier(type),
        );
    }

    export function coalesce(
        x: ts.Expression,
        y: ts.Expression,
    ): ts.Expression {
        return ts.factory.createBinaryExpression(
            x,
            ts.factory.createToken(ts.SyntaxKind.QuestionQuestionToken),
            y,
        );
    }
}
