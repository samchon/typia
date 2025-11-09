import typia from "typia";
import { TypeTagArray } from "../../../structures/TypeTagArray";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_gemini_TypeTagArray = (): void =>
  _test_llm_schema({
    model: "gemini",
    name: "TypeTagArray",
  })(typia.llm.schema<TypeTagArray, "gemini">({}));