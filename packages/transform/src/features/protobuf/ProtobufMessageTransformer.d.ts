import ts from "typescript";
import { ITransformProps } from "../../ITransformProps";
export declare namespace ProtobufMessageTransformer {
    const transform: (props: Pick<ITransformProps, "context" | "expression">) => ts.Expression;
}
