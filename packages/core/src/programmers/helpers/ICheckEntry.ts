import ts from "@typescript/native-preview";

export interface ICheckEntry {
  expected: string;
  expression: ts.Expression | null;
  conditions: ICheckEntry.ICondition[][];
}
export namespace ICheckEntry {
  export interface ICondition {
    expected: string;
    expression: ts.Expression;
  }
}
