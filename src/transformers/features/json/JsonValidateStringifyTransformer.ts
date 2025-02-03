import { JsonValidateStringifyProgrammer } from "../../../programmers/json/JsonValidateStringifyProgrammer";

import { ITransformProps } from "../../ITransformProps";
import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace JsonValidateStringifyTransformer {
  export const transform = (props: ITransformProps) =>
    GenericTransformer.scalar({
      ...props,
      method: "json.validateStringify",
      write: JsonValidateStringifyProgrammer.write,
    });
}
