import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { ArrayHierarchicalPointer } from "../../../structures/ArrayHierarchicalPointer";

export const test_llm_schema_gemini_ArrayHierarchicalPointer = (): void =>
  _test_llm_schema({
    model: "gemini",
    name: "ArrayHierarchicalPointer",
  })(typia.llm.schema<ArrayHierarchicalPointer, "gemini">());
