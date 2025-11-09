import typia from "typia";
import { ObjectPartial } from "../../../structures/ObjectPartial";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_gemini_ObjectPartial = (): void =>
  _test_llm_schema({
    model: "gemini",
    name: "ObjectPartial",
  })(typia.llm.schema<ObjectPartial, "gemini">({}));