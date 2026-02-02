import { JsonAssertParseProgrammer } from "../../../programmers/json/JsonAssertParseProgrammer";

import { ITransformProps } from "../../ITransformProps";
import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace JsonAssertParseTransformer {
  export const transform = (props: ITransformProps) =>
    GenericTransformer.scalar({
      ...props,
      method: "json.assertParse",
      write: JsonAssertParseProgrammer.write,
    });
}
