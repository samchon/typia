import { MiscValidateCloneProgrammer } from "@typia/core";

import { ITransformProps } from "../../ITransformProps";
import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace MiscCreateValidateCloneTransformer {
  export const transform = (props: ITransformProps) =>
    GenericTransformer.factory({
      ...props,
      method: "misc.createValidateClone",
      write: MiscValidateCloneProgrammer.write,
    });
}
