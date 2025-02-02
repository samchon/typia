import { JsonValidateParseProgrammer } from "../../../programmers/json/JsonValidateParseProgrammer";

import type { ITransformProps } from "../../ITransformProps";
import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace JsonCreateValidateParseTransformer {
  export const transform = (props: ITransformProps) =>
    GenericTransformer.factory({
      ...props,
      method: "json.createValidateParse",
      write: JsonValidateParseProgrammer.write,
    });
}
