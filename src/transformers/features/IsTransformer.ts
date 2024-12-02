import { IsProgrammer } from "../../programmers/IsProgrammer";

import { ITransformProps } from "../ITransformProps";
import { GenericTransformer } from "../internal/GenericTransformer";

export namespace IsTransformer {
  export const transform =
    (config: IsProgrammer.IConfig) => (props: ITransformProps) =>
      GenericTransformer.scalar({
        ...props,
        method: config.equals ? "equals" : "is",
        write: (x) =>
          IsProgrammer.write({
            ...x,
            config,
          }),
      });
}
