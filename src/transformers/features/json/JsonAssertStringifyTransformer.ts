import { JsonAssertStringifyProgrammer } from "../../../programmers/json/JsonAssertStringifyProgrammer";

import type { ITransformProps } from "../../ITransformProps";
import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace JsonAssertStringifyTransformer {
  export const transform = (props: ITransformProps) =>
    GenericTransformer.scalar({
      ...props,
      method: "json.assertStringify",
      write: JsonAssertStringifyProgrammer.write,
    });
}
