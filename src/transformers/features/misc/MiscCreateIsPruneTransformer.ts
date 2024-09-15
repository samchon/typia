import { MiscIsPruneProgrammer } from "../../../programmers/misc/MiscIsPruneProgrammer";

import { ITransformProps } from "../../ITransformProps";
import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace MiscCreateIsPruneTransformer {
  export const transform = (props: ITransformProps) =>
    GenericTransformer.factory({
      ...props,
      method: "misc.createIsPrune",
      write: MiscIsPruneProgrammer.write,
    });
}
