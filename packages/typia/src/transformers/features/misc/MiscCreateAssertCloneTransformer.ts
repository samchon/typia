import { MiscAssertCloneProgrammer } from "../../../programmers/misc/MiscAssertCloneProgrammer";

import { ITransformProps } from "../../ITransformProps";
import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace MiscCreateAssertCloneTransformer {
  export const transform = (props: ITransformProps) =>
    GenericTransformer.factory({
      ...props,
      method: "misc.createAssertClone",
      write: MiscAssertCloneProgrammer.write,
    });
}
