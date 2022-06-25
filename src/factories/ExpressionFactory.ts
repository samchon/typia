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
        nullChecked: boolean,
    ): ts.Expression {
        const equality = ts.factory.createStrictEquality(
            ts.factory.createStringLiteral("object"),
            ts.factory.createTypeOfExpression(input),
        );
        return nullChecked === true
            ? equality
            : ts.factory.createLogicalAnd(
                  ts.factory.createStrictInequality(
                      ts.factory.createNull(),
                      input,
                  ),
                  equality,
              );
    }
}
