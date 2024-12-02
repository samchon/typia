import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { ObjectRecursive } from "../../../structures/ObjectRecursive";

export const test_llm_schema_gemini_ObjectRecursive = _test_llm_schema({
  model: "gemini",
  name: "ObjectRecursive",
})(typia.llm.schema<ObjectRecursive, "gemini">());
