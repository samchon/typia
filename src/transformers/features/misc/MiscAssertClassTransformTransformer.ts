import { MiscAssertClassTransformProgrammer } from "../../../programmers/misc/MiscAssertClassTransformProgrammer";

import { ITransformProps } from "../../ITransformProps";
import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace MiscAssertClassTransformTransformer {
  export const transform = (props: ITransformProps) =>
    GenericTransformer.factory({
      ...props,
      method: "misc.assertClassTransform",
      write: MiscAssertClassTransformProgrammer.write,
    });
}