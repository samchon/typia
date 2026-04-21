import ts from "typescript";
import { ITransformProps } from "../../ITransformProps";
export declare namespace MiscLiteralsTransformer {
    const transform: (props: Omit<ITransformProps, "modulo">) => ts.Expression;
}
