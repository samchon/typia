import typia from "typia";
import { ArrayRecursive } from "../../../structures/ArrayRecursive";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_gemini_ArrayRecursive = (): void =>
  _test_llm_schema({
    model: "gemini",
    name: "ArrayRecursive",
  })(typia.llm.schema<ArrayRecursive, "gemini">({}));