import { AssertProgrammer } from "@typia/core";
import { ITransformProps } from "../ITransformProps";
export declare namespace CreateAssertTransformer {
    const transform: (config: AssertProgrammer.IConfig) => (props: ITransformProps) => import("node_modules/typescript/lib/typescript").Expression | import("node_modules/typescript/lib/typescript").ArrowFunction;
}
