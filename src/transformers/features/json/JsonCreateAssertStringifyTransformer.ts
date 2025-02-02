import { JsonAssertStringifyProgrammer } from "../../../programmers/json/JsonAssertStringifyProgrammer";

import type { ITransformProps } from "../../ITransformProps";
import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace JsonCreateAssertStringifyTransformer {
  export const transform = (props: ITransformProps) =>
    GenericTransformer.factory({
      ...props,
      method: "json.createAssertStringify",
      write: JsonAssertStringifyProgrammer.write,
    });
}
