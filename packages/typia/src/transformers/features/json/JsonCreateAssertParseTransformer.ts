import { JsonAssertParseProgrammer } from "../../../programmers/json/JsonAssertParseProgrammer";

import { ITransformProps } from "../../ITransformProps";
import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace JsonCreateAssertParseTransformer {
  export const transform = (props: ITransformProps) =>
    GenericTransformer.factory({
      ...props,
      method: "json.createAssertParse",
      write: JsonAssertParseProgrammer.write,
    });
}
