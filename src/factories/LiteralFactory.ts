import ts from "typescript";

import { ExpressionFactory } from "./ExpressionFactory";
import { IdentifierFactory } from "./IdentifierFactory";

export namespace LiteralFactory {
  export const write = (input: any): ts.Expression => {
    if (input === null) return ts.factory.createNull();
    else if (ts.isArrowFunction(input)) return input;
    else if (ts.isCallExpression(input)) return input;
    else if (ts.isIdentifier(input)) return input;
    else if (input instanceof Array) return writeArray(input);
    else if (typeof input === "object") return writeObject(input);
    else if (typeof input === "boolean") return writeBoolean(input);
    else if (typeof input === "bigint") return writeBigint(input);
    else if (typeof input === "number") return writeNumber(input);
    else if (typeof input === "string") return writeStrinng(input);
    // unreachable code
    else if (typeof input === "function")
      return ts.factory.createIdentifier("undefined");
    else
      throw new TypeError("Error on LiteralFactory.generate(): unknown type.");
  };

  const writeObject = (obj: object): ts.ObjectLiteralExpression =>
    ts.factory.createObjectLiteralExpression(
      Object.entries(obj)
        .filter((tuple) => tuple[1] !== undefined)
        .map(([key, value]) =>
          ts.factory.createPropertyAssignment(
            IdentifierFactory.identifier(key),
            write(value),
          ),
        ),
      true,
    );

  const writeArray = (array: any[]): ts.ArrayLiteralExpression =>
    ts.factory.createArrayLiteralExpression(array.map(write), true);

  const writeBoolean = (value: boolean): ts.Expression =>
    value ? ts.factory.createTrue() : ts.factory.createFalse();

  const writeNumber = (value: number): ts.Expression =>
    ExpressionFactory.number(value);

  const writeBigint = (value: bigint): ts.Expression =>
    ExpressionFactory.bigint(value);

  const writeStrinng = (value: string): ts.StringLiteral =>
    ts.factory.createStringLiteral(value);
}
