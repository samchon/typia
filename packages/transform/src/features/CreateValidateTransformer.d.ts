import { ValidateProgrammer } from "@typia/core";
import { ITransformProps } from "../ITransformProps";
export declare namespace CreateValidateTransformer {
    const transform: (config: ValidateProgrammer.IConfig) => (props: ITransformProps) => import("node_modules/typescript/lib/typescript").Expression | import("node_modules/typescript/lib/typescript").ArrowFunction;
}
