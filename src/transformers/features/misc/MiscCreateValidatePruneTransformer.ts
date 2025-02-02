import { MiscValidatePruneProgrammer } from "../../../programmers/misc/MiscValidatePruneProgrammer";

import type { ITransformProps } from "../../ITransformProps";
import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace MiscCreateValidatePruneTransformer {
  export const transform = (props: ITransformProps) =>
    GenericTransformer.factory({
      ...props,
      method: "misc.createValidatePrune",
      write: MiscValidatePruneProgrammer.write,
    });
}
