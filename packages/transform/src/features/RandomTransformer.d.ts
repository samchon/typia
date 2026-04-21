import ts from "typescript";
import { ITransformProps } from "../ITransformProps";
export declare namespace RandomTransformer {
    const transform: (props: ITransformProps) => ts.Expression;
}
