import { MiscIsCloneProgrammer } from "../../../programmers/misc/MiscIsCloneProgrammer";

import { ITransformProps } from "../../ITransformProps";
import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace MiscIsCloneTransformer {
  export const transform = (props: ITransformProps) =>
    GenericTransformer.scalar({
      ...props,
      method: "misc.isClone",
      write: MiscIsCloneProgrammer.write,
    });
}
