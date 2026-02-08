import { JsonIsStringifyProgrammer } from "../../../programmers/json/JsonIsStringifyProgrammer";

import { ITransformProps } from "../../ITransformProps";
import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace JsonCreateIsStringifyTransformer {
  export const transform = (props: ITransformProps) =>
    GenericTransformer.factory({
      ...props,
      method: "json.stringify",
      write: JsonIsStringifyProgrammer.write,
    });
}
