import ts from "typescript";

/**
 * @internal
 */
export const check_native = (type: string) => (input: ts.Expression) =>
    ts.factory.createBinaryExpression(
        input,
        ts.factory.createToken(ts.SyntaxKind.InstanceOfKeyword),
        ts.factory.createIdentifier(type),
    );
