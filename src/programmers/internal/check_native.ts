import ts from "typescript";

import { ExpressionFactory } from "../../factories/ExpressionFactory";

/**
 * @internal
 */
export const check_native = (type: string) => (input: ts.Expression) => {
    const instanceOf = ExpressionFactory.isInstanceOf(type)(input);
    return ATOMIC_LIKE.has(type)
        ? ts.factory.createLogicalOr(
              ts.factory.createStrictEquality(
                  ts.factory.createStringLiteral(type.toLowerCase()),
                  ts.factory.createTypeOfExpression(input),
              ),
              instanceOf,
          )
        : instanceOf;
};

const ATOMIC_LIKE = new Set(["Boolean", "Number", "String"]);
