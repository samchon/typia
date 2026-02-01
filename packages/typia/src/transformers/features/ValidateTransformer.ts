import { ValidateProgrammer } from "../../programmers/ValidateProgrammer";

import { ITransformProps } from "../ITransformProps";
import { GenericTransformer } from "../internal/GenericTransformer";

export namespace ValidateTransformer {
  export const transform =
    (config: ValidateProgrammer.IConfig) => (props: ITransformProps) =>
      GenericTransformer.scalar({
        ...props,
        method: config.equals ? "validateEquals" : "validate",
        write: (x) =>
          ValidateProgrammer.write({
            ...x,
            config,
          }),
      });
}
