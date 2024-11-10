import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { ObjectSimple } from "../../../structures/ObjectSimple";

export const test_llm_schema_gemini_ObjectSimple = _test_llm_schema({
  model: "gemini",
  name: "ObjectSimple",
})(typia.llm.schema<ObjectSimple, "gemini">());
