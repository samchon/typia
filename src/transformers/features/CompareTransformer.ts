import { CompareProgrammer } from "../../programmers/CompareProgrammer";

import { ITransformProps } from "../ITransformProps";
import { GenericTransformer } from "../internal/GenericTransformer";

export namespace CompareTransformer {
  export const transform =
    (config: CompareProgrammer.IConfig) => (props: ITransformProps) =>
      GenericTransformer.scalar({
        ...props,
        method: config.equals ? "compare.equals" : config.covers ? "compare.covers" : "compare.less",
        write: (x) =>
          CompareProgrammer.write({
            ...x,
            config,
          }),
      });
}