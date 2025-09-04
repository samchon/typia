import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { ObjectJsonTag } from "../../../structures/ObjectJsonTag";

export const test_llm_schema_gemini_ObjectJsonTag = (): void =>
  _test_llm_schema({
    model: "gemini",
    name: "ObjectJsonTag",
  })(typia.llm.schema<ObjectJsonTag, "gemini">());
