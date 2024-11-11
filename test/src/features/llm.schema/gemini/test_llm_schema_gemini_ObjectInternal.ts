import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { ObjectInternal } from "../../../structures/ObjectInternal";

export const test_llm_schema_gemini_ObjectInternal = _test_llm_schema({
  model: "gemini",
  name: "ObjectInternal",
})(typia.llm.schema<ObjectInternal, "gemini">());
