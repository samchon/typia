import { MiscValidatePruneProgrammer } from "../../../programmers/misc/MiscValidatePruneProgrammer";

import type { ITransformProps } from "../../ITransformProps";
import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace MiscValidatePruneTransformer {
  export const transform = (props: ITransformProps) =>
    GenericTransformer.scalar({
      ...props,
      method: "misc.validatPrune",
      write: MiscValidatePruneProgrammer.write,
    });
}
