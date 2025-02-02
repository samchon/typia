import { MiscAssertPruneProgrammer } from "../../../programmers/misc/MiscAssertPruneProgrammer";

import type { ITransformProps } from "../../ITransformProps";
import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace MiscAssertPruneTransformer {
  export const transform = (props: ITransformProps) =>
    GenericTransformer.scalar({
      ...props,
      method: "misc.assertPrune",
      write: MiscAssertPruneProgrammer.write,
    });
}
