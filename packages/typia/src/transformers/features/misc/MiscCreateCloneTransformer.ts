import { MiscCloneProgrammer } from "../../../programmers/misc/MiscCloneProgrammer";

import { ITransformProps } from "../../ITransformProps";
import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace MiscCreateCloneTransformer {
  export const transform = (props: ITransformProps) =>
    GenericTransformer.factory({
      ...props,
      method: "misc.createClone",
      write: MiscCloneProgrammer.write,
    });
}
