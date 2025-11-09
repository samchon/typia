import typia from "typia";
import { ArrayRepeatedNullable } from "../../../structures/ArrayRepeatedNullable";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_gemini_ArrayRepeatedNullable = (): void =>
  _test_llm_schema({
    model: "gemini",
    name: "ArrayRepeatedNullable",
  })(typia.llm.schema<ArrayRepeatedNullable, "gemini">({}));