import ts from "typescript";

import { ExpressionFactory } from "../../factories/ExpressionFactory";

/**
 * @internal
 */
export const check_native = (props: {
  type: string;
  input: ts.Expression;
}): ts.Expression => {
  const instanceOf = ExpressionFactory.isInstanceOf(props.type, props.input);
  return ATOMIC_LIKE.has(props.type)
    ? ts.factory.createLogicalOr(
        ts.factory.createStrictEquality(
          ts.factory.createStringLiteral(props.type.toLowerCase()),
          ts.factory.createTypeOfExpression(props.input),
        ),
        instanceOf,
      )
    : instanceOf;
};

/**
 * @internal
 */
const ATOMIC_LIKE = new Set(["Boolean", "Number", "String"]);
