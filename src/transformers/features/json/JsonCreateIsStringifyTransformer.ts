import { JsonStringifyProgrammer } from "../../../programmers/json/JsonStringifyProgrammer";

import { ITransformProps } from "../../ITransformProps";
import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace JsonCreateIsStringifyTransformer {
  export const transform = (props: ITransformProps) =>
    GenericTransformer.factory({
      ...props,
      method: "json.stringify",
      write: JsonStringifyProgrammer.write,
    });
}
