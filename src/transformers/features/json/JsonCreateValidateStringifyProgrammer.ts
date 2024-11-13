import { JsonValidateStringifyProgrammer } from "../../../programmers/json/JsonValidateStringifyProgrammer";

import { ITransformProps } from "../../ITransformProps";
import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace JsonCreateValidateStringifyTransformer {
  export const transform = (props: ITransformProps) =>
    GenericTransformer.factory({
      ...props,
      method: "json.createValidateStringify",
      write: JsonValidateStringifyProgrammer.write,
    });
}
