import ts from "typescript";

import { IMetadataTypeTag } from "../../schemas/metadata/IMetadataTypeTag";

export interface ICheckEntry {
  expected: string;
  expression: ts.Expression | null;
  conditions: ICheckEntry.ICondition[][];
}
export namespace ICheckEntry {
  export interface ICondition {
    expected: string;
    expression: ts.Expression;
    tag: IMetadataTypeTag;
  }
}
