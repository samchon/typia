import typia from "typia";

import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";
import { ObjectRecursive } from "../../../structures/ObjectRecursive";

export const test_llm_parameters_gemini_ObjectRecursive = _test_llm_parameters({
  model: "gemini",
  name: "ObjectRecursive",
})(typia.llm.parameters<ObjectRecursiveParameters, "gemini">());

interface ObjectRecursiveParameters {
  regular: ObjectRecursive;
  nullable: ObjectRecursive | null;
  optional: ObjectRecursive | undefined;
  faint: ObjectRecursive | null | undefined;
  array: Array<ObjectRecursive>;
}
