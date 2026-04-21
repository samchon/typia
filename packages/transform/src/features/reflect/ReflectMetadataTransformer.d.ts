import ts from "typescript";
import { ITransformProps } from "../../ITransformProps";
export declare namespace ReflectMetadataTransformer {
    const transform: (props: Pick<ITransformProps, "context" | "expression">) => ts.Expression;
}
