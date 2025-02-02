import { MiscPruneProgrammer } from "../../../programmers/misc/MiscPruneProgrammer";

import type { ITransformProps } from "../../ITransformProps";
import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace MiscCreatePruneTransformer {
  export const transform = (props: ITransformProps) =>
    GenericTransformer.factory({
      ...props,
      method: "misc.createPrune",
      write: MiscPruneProgrammer.write,
    });
}
