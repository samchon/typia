import typia from "typia";
import { ObjectIntersection } from "../../../structures/ObjectIntersection";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_gemini_ObjectIntersection = (): void =>
  _test_llm_schema({
    model: "gemini",
    name: "ObjectIntersection",
  })(typia.llm.schema<ObjectIntersection, "gemini">({}));