import typia from "typia";
import { DynamicNever } from "../../../structures/DynamicNever";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_gemini_DynamicNever = (): void =>
  _test_llm_schema({
    model: "gemini",
    name: "DynamicNever",
  })(typia.llm.schema<DynamicNever, "gemini">({}));