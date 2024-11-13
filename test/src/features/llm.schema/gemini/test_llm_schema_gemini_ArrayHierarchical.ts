import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { ArrayHierarchical } from "../../../structures/ArrayHierarchical";

export const test_llm_schema_gemini_ArrayHierarchical = _test_llm_schema({
  model: "gemini",
  name: "ArrayHierarchical",
})(typia.llm.schema<ArrayHierarchical, "gemini">());
