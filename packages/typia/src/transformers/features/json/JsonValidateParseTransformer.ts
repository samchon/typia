import { JsonValidateParseProgrammer } from "../../../programmers/json/JsonValidateParseProgrammer";

import { ITransformProps } from "../../ITransformProps";
import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace JsonValidateParseTransformer {
  export const transform = (props: ITransformProps) =>
    GenericTransformer.scalar({
      ...props,
      method: "json.validateParse",
      write: JsonValidateParseProgrammer.write,
    });
}
