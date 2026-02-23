import ts from "typescript";

export namespace ValueFactory {
  export const NULL = () => ts.factory.createNull();
  export const UNDEFINED = () => ts.factory.createIdentifier("undefined");
  export const BOOLEAN = (value: boolean) =>
    value ? ts.factory.createTrue() : ts.factory.createFalse();
  export const INPUT = (str: string = "input") =>
    ts.factory.createIdentifier(str);
  export const TYPEOF = (input: ts.Expression) =>
    ts.factory.createTypeOfExpression(input);
}
