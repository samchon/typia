import { MiscCloneProgrammer } from "../../../programmers/misc/MiscCloneProgrammer";

import { ITransformProps } from "../../ITransformProps";
import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace MiscCloneTransformer {
  export const transform = (props: ITransformProps) =>
    GenericTransformer.scalar({
      ...props,
      method: "misc.clone",
      write: MiscCloneProgrammer.write,
    });
}
