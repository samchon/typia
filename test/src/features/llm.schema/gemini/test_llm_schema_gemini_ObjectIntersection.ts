import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { ObjectIntersection } from "../../../structures/ObjectIntersection";

export const test_llm_schema_gemini_ObjectIntersection = (): void =>
  _test_llm_schema({
    model: "gemini",
    name: "ObjectIntersection",
  })(typia.llm.schema<ObjectIntersection, "gemini">({}));
