import { JsonIsParseProgrammer } from "../../../programmers/json/JsonIsParseProgrammer";

import { ITransformProps } from "../../ITransformProps";
import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace JsonCreateIsParseTransformer {
  export const transform = (props: ITransformProps) =>
    GenericTransformer.factory({
      ...props,
      method: "json.createIsParse",
      write: JsonIsParseProgrammer.write,
    });
}
