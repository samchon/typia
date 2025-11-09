import typia from "typia";
import { ArrayHierarchical } from "../../../structures/ArrayHierarchical";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_gemini_ArrayHierarchical = (): void =>
  _test_llm_schema({
    model: "gemini",
    name: "ArrayHierarchical",
  })(typia.llm.schema<ArrayHierarchical, "gemini">({}));