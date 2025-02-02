import { MiscPruneProgrammer } from "../../../programmers/misc/MiscPruneProgrammer";

import type { ITransformProps } from "../../ITransformProps";
import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace MiscPruneTransformer {
  export const transform = (props: ITransformProps) =>
    GenericTransformer.scalar({
      ...props,
      method: "misc.prune",
      write: MiscPruneProgrammer.write,
    });
}
