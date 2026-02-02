import { ValidateProgrammer } from "../../programmers/ValidateProgrammer";

import { ITransformProps } from "../ITransformProps";
import { GenericTransformer } from "../internal/GenericTransformer";

export namespace CreateValidateTransformer {
  export const transform =
    (config: ValidateProgrammer.IConfig) => (props: ITransformProps) =>
      GenericTransformer.factory({
        ...props,
        method: config.equals ? "validateEquals" : "validate",
        write: (x) =>
          ValidateProgrammer.write({
            ...x,
            config,
          }),
      });
}
