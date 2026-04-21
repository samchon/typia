import { IsProgrammer } from "@typia/core";
import { ITransformProps } from "../ITransformProps";
export declare namespace IsTransformer {
    const transform: (config: IsProgrammer.IConfig) => (props: ITransformProps) => import("node_modules/typescript/lib/typescript").CallExpression;
}
