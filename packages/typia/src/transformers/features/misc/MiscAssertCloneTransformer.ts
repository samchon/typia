import { MiscAssertCloneProgrammer } from "../../../programmers/misc/MiscAssertCloneProgrammer";

import { ITransformProps } from "../../ITransformProps";
import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace MiscAssertCloneTransformer {
  export const transform = (props: ITransformProps) =>
    GenericTransformer.scalar({
      ...props,
      method: "misc.assertClone",
      write: MiscAssertCloneProgrammer.write,
    });
}
