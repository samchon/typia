import { JsonStringifyProgrammer } from "../../../programmers/json/JsonStringifyProgrammer";

import { ITransformProps } from "../../ITransformProps";
import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace JsonStringifyTransformer {
  export const transform = (props: ITransformProps) =>
    GenericTransformer.scalar({
      ...props,
      method: "json.stringify",
      write: JsonStringifyProgrammer.write,
    });
}
