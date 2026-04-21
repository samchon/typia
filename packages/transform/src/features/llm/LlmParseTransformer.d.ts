import ts from "typescript";
import { ITransformProps } from "../../ITransformProps";
export declare namespace LlmParseTransformer {
    const transform: (props: ITransformProps) => ts.Expression;
}
