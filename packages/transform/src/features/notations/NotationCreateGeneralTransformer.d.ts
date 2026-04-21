import { ITransformProps } from "../../ITransformProps";
export declare namespace NotationCreateGeneralTransformer {
    const transform: (rename: (str: string) => string) => (props: ITransformProps) => import("node_modules/typescript/lib/typescript").Expression | import("node_modules/typescript/lib/typescript").ArrowFunction;
}
