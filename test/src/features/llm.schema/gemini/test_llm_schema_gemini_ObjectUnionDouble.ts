import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { ObjectUnionDouble } from "../../../structures/ObjectUnionDouble";

export const test_llm_schema_gemini_ObjectUnionDouble = (): void =>
  _test_llm_schema({
    model: "gemini",
    name: "ObjectUnionDouble",
  })(typia.llm.schema<ObjectUnionDouble, "gemini">({}));
