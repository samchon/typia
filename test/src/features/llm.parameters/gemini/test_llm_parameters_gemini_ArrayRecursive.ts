import typia from "typia";

import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";
import { ArrayRecursive } from "../../../structures/ArrayRecursive";

export const test_llm_parameters_gemini_ArrayRecursive = _test_llm_parameters({
  model: "gemini",
  name: "ArrayRecursive",
})(typia.llm.parameters<ArrayRecursiveParameters, "gemini">());

interface ArrayRecursiveParameters {
  regular: ArrayRecursive;
  nullable: ArrayRecursive | null;
  optional: ArrayRecursive | undefined;
  faint: ArrayRecursive | null | undefined;
  array: Array<ArrayRecursive>;
}
