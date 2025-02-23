import { CompareEqualsProgrammer } from "../../../programmers/compare/CompareEqualsProgrammer";

import { ITransformProps } from "../../ITransformProps";
import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace CompareEqualsTransformer {
  export const transform = (props: ITransformProps) =>
    GenericTransformer.scalar({
      ...props,
      method: "compare.equals",
      write: CompareEqualsProgrammer.write,
    });
}
