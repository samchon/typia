import ts from "typescript";

import { Metadata } from "../../metadata/Metadata";

export interface IExpressionEntry {
    input: ts.Expression;
    key: Metadata;
    meta: Metadata;
    expression: ts.Expression;
}
