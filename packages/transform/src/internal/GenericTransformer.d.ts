import { IProgrammerProps } from "@typia/core";
import ts from "typescript";
import { ITransformProps } from "../ITransformProps";
export declare namespace GenericTransformer {
    interface IProps extends ITransformProps {
        method: string;
        write: (props: IProgrammerProps) => ts.Expression | ts.ArrowFunction;
    }
    const scalar: (props: IProps) => ts.CallExpression;
    const factory: (props: IProps) => ts.Expression | ts.ArrowFunction;
}
