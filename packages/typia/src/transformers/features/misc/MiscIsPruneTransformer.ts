import { MiscIsPruneProgrammer } from "../../../programmers/misc/MiscIsPruneProgrammer";

import { ITransformProps } from "../../ITransformProps";
import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace MiscIsPruneTransformer {
  export const transform = (props: ITransformProps) =>
    GenericTransformer.scalar({
      ...props,
      method: "misc.isPrune",
      write: MiscIsPruneProgrammer.write,
    });
}
