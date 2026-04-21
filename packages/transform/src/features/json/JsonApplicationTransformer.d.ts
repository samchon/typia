import ts from "typescript";
import { ITransformProps } from "../../ITransformProps";
export declare namespace JsonApplicationTransformer {
    const transform: (props: ITransformProps) => ts.Expression;
}
