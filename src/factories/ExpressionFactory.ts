import ts from "typescript";

export namespace ExpressionFactory {
    export const isRequired = (input: ts.Expression): ts.Expression =>
        ts.factory.createStrictInequality(
            ts.factory.createIdentifier("undefined"),
            input,
        );

    export const isArray = (input: ts.Expression): ts.Expression =>
        ts.factory.createCallExpression(
            ts.factory.createIdentifier("Array.isArray"),
            undefined,
            [input],
        );

    export const isObject =
        (options: { checkNull: boolean; checkArray: boolean }) =>
        (input: ts.Expression): ts.Expression => {
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
                : conditions.reduce((x, y) =>
                      ts.factory.createLogicalAnd(x, y),
                  );
        };

    export const isInstanceOf =
        (type: string) =>
        (input: ts.Expression): ts.Expression => {
            return ts.factory.createBinaryExpression(
                input,
                ts.factory.createToken(ts.SyntaxKind.InstanceOfKeyword),
                ts.factory.createIdentifier(type),
            );
        };

    export const coalesce =
        (x: ts.Expression) =>
        (y: ts.Expression): ts.Expression =>
            ts.factory.createBinaryExpression(
                x,
                ts.factory.createToken(ts.SyntaxKind.QuestionQuestionToken),
                y,
            );

    export const currying =
        (target: ts.Expression) => (parameters: ts.Expression[]) => {
            if (parameters.length === 0)
                return ts.factory.createCallExpression(
                    target,
                    undefined,
                    undefined,
                );
            let prev: ts.CallExpression = ts.factory.createCallExpression(
                target,
                undefined,
                [parameters[0]!],
            );
            for (const param of parameters.slice(1))
                prev = ts.factory.createCallExpression(prev, undefined, [
                    param,
                ]);
            return prev;
        };

    export const selfCall = (body: ts.ConciseBody) =>
        ts.isCallExpression(body)
            ? body
            : ts.factory.createCallExpression(
                  ts.factory.createParenthesizedExpression(
                      ts.factory.createArrowFunction(
                          undefined,
                          undefined,
                          [],
                          undefined,
                          undefined,
                          body,
                      ),
                  ),
                  undefined,
                  undefined,
              );
}
