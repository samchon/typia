import { JsonIsParseProgrammer } from "../../../programmers/json/JsonIsParseProgrammer";

import type { ITransformProps } from "../../ITransformProps";
import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace JsonIsParseTransformer {
  export const transform = (props: ITransformProps) =>
    GenericTransformer.scalar({
      ...props,
      method: "json.isParse",
      write: JsonIsParseProgrammer.write,
    });
}
