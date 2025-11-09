import typia from "typia";
import { ArrayMatrix } from "../../../structures/ArrayMatrix";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_gemini_ArrayMatrix = (): void =>
  _test_llm_schema({
    model: "gemini",
    name: "ArrayMatrix",
  })(typia.llm.schema<ArrayMatrix, "gemini">({}));