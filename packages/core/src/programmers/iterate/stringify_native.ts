import ts from "@typescript/native-preview";

/** @internal */
export const stringify_native = (): ts.Expression =>
  ts.factory.createStringLiteral("{}");
