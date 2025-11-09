import typia from "typia";
import { ArrayUnion } from "../../../structures/ArrayUnion";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_gemini_ArrayUnion = (): void =>
  _test_llm_schema({
    model: "gemini",
    name: "ArrayUnion",
  })(typia.llm.schema<ArrayUnion, "gemini">({}));