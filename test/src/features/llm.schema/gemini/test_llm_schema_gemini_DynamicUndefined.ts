import typia from "typia";
import { DynamicUndefined } from "../../../structures/DynamicUndefined";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_gemini_DynamicUndefined = (): void =>
  _test_llm_schema({
    model: "gemini",
    name: "DynamicUndefined",
  })(typia.llm.schema<DynamicUndefined, "gemini">({}));