import ts from "typescript";
import { IMetadata } from "./IMetadata";

export interface IExpressionEntry {
    input: ts.Expression;
    key: string;
    meta: IMetadata;
    expression: ts.Expression;
}
