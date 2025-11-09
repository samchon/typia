import typia from "typia";
import { ObjectDescription } from "../../../structures/ObjectDescription";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_gemini_ObjectDescription = (): void =>
  _test_llm_schema({
    model: "gemini",
    name: "ObjectDescription",
  })(typia.llm.schema<ObjectDescription, "gemini">({}));