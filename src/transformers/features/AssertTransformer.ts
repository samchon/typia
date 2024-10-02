import { AssertProgrammer } from "../../programmers/AssertProgrammer";

import { ITransformProps } from "../ITransformProps";
import { GenericTransformer } from "../internal/GenericTransformer";

export namespace AssertTransformer {
  export const transform =
    (config: AssertProgrammer.IConfig) => (props: ITransformProps) =>
      GenericTransformer.scalar({
        ...props,
        method: config.equals
          ? config.guard
            ? "assertGuardEquals"
            : "assertEquals"
          : config.guard
            ? "assertGuard"
            : "assert",
        write: (x) =>
          AssertProgrammer.write({
            ...x,
            config,
          }),
      });
}
