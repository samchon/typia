import { JsonIsStringifyProgrammer } from "../../../programmers/json/JsonIsStringifyProgrammer";

import { ITransformProps } from "../../ITransformProps";
import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace JsonIsStringifyTransformer {
  export const transform = (props: ITransformProps) =>
    GenericTransformer.scalar({
      ...props,
      method: "json.isStringify",
      write: JsonIsStringifyProgrammer.write,
    });
}
