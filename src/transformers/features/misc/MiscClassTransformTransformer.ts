import { MiscClassTransformProgrammer } from "../../../programmers/misc/MiscClassTransformProgrammer";

import { ITransformProps } from "../../ITransformProps";
import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace MiscClassTransformTransformer {
  export const transform = (props: ITransformProps) =>
    GenericTransformer.scalar({
      ...props,
      method: "misc.classTransform",
      write: MiscClassTransformProgrammer.write,
    });
}