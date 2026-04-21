import { ValidateProgrammer } from "@typia/core";
import { ITransformProps } from "../ITransformProps";
export declare namespace ValidateTransformer {
    const transform: (config: ValidateProgrammer.IConfig) => (props: ITransformProps) => import("node_modules/typescript/lib/typescript").CallExpression;
}
