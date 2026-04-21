import { ITransformProps } from "../../ITransformProps";
export declare namespace NotationAssertGeneralTransformer {
    const transform: (rename: (str: string) => string) => (props: ITransformProps) => import("node_modules/typescript/lib/typescript").CallExpression;
}
