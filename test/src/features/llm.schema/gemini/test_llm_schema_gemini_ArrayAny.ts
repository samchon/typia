import typia from "typia";
import { ArrayAny } from "../../../structures/ArrayAny";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_gemini_ArrayAny = (): void =>
  _test_llm_schema({
    model: "gemini",
    name: "ArrayAny",
  })(typia.llm.schema<ArrayAny, "gemini">({}));