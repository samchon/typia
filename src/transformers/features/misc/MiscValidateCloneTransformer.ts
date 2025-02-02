import { MiscValidateCloneProgrammer } from "../../../programmers/misc/MiscValidateCloneProgrammer";

import type { ITransformProps } from "../../ITransformProps";
import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace MiscValidateCloneTransformer {
  export const transform = (props: ITransformProps) =>
    GenericTransformer.scalar({
      ...props,
      method: "misc.validatClone",
      write: MiscValidateCloneProgrammer.write,
    });
}
