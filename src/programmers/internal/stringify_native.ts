import ts from "typescript";

/** @internal */
export const stringify_native = (): ts.Expression =>
  ts.factory.createStringLiteral("{}");
