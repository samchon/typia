import ts from "typescript";
import { ITransformProps } from "../../ITransformProps";
export declare namespace LlmApplicationTransformer {
    const transform: (props: ITransformProps) => ts.Expression;
}
