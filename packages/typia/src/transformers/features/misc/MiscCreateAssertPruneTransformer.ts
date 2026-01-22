import { MiscAssertPruneProgrammer } from "../../../programmers/misc/MiscAssertPruneProgrammer";

import { ITransformProps } from "../../ITransformProps";
import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace MiscCreateAssertPruneTransformer {
  export const transform = (props: ITransformProps) =>
    GenericTransformer.factory({
      ...props,
      method: "misc.createAssertPrune",
      write: MiscAssertPruneProgrammer.write,
    });
}
