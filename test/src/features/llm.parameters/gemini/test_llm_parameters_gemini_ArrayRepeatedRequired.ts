import typia from "typia";

import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";
import { ArrayRepeatedRequired } from "../../../structures/ArrayRepeatedRequired";

export const test_llm_parameters_gemini_ArrayRepeatedRequired = (): void =>
  _test_llm_parameters({
    model: "gemini",
    name: "ArrayRepeatedRequired",
  })(typia.llm.parameters<ArrayRepeatedRequiredParameters, "gemini">());

interface ArrayRepeatedRequiredParameters {
  regular: ArrayRepeatedRequired;
  nullable: ArrayRepeatedRequired | null;
  optional: ArrayRepeatedRequired | undefined;
  faint: ArrayRepeatedRequired | null | undefined;
  array: Array<ArrayRepeatedRequired>;
}
