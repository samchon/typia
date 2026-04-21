import ts from "typescript";
import { ITransformProps } from "../../ITransformProps";
export declare namespace LlmSchemaTransformer {
    const transform: (props: ITransformProps) => ts.Expression;
}
