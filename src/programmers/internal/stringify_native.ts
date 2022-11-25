import ts from "typescript";

/**
 * @internal
 */
export function stringify_native(): ts.Expression {
    return ts.factory.createStringLiteral("{}");
}
