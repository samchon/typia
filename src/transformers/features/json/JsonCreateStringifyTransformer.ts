import { JsonStringifyProgrammer } from "../../../programmers/json/JsonStringifyProgrammer";

import { ITransformProps } from "../../ITransformProps";
import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace JsonCreateStringifyTransformer {
  export const transform = (props: ITransformProps) =>
    GenericTransformer.factory({
      ...props,
      method: "json.createStringify",
      write: JsonStringifyProgrammer.write,
    });
}
