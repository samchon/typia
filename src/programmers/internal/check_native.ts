import ts from "typescript";

import { ExpressionFactory } from "../../factories/ExpressionFactory";

/**
 * @internal
 */
export const check_native = (type: string) => (input: ts.Expression) =>
    ExpressionFactory.isInstanceOf(input, type);
