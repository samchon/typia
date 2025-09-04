import ts from "typescript";

import { ExpressionFactory } from "../../factories/ExpressionFactory";

/** @internal */
export const check_native = (props: {
  name: string;
  input: ts.Expression;
}): ts.Expression => {
  const instanceOf = ExpressionFactory.isInstanceOf(props.name, props.input);
  return ATOMIC_LIKE.has(props.name)
    ? ts.factory.createLogicalOr(
        ts.factory.createStrictEquality(
          ts.factory.createStringLiteral(props.name.toLowerCase()),
          ts.factory.createTypeOfExpression(props.input),
        ),
        instanceOf,
      )
    : instanceOf;
};

/** @internal */
const ATOMIC_LIKE = new Set(["Boolean", "Number", "String"]);
