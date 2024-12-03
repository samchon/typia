import { MiscIsCloneProgrammer } from "../../../programmers/misc/MiscIsCloneProgrammer";

import { ITransformProps } from "../../ITransformProps";
import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace MiscCreateIsCloneTransformer {
  export const transform = (props: ITransformProps) =>
    GenericTransformer.factory({
      ...props,
      method: "misc.createIsClone",
      write: MiscIsCloneProgrammer.write,
    });
}
