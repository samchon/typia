import typia from "typia";
import { ArrayHierarchical } from "../../../structures/ArrayHierarchical";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_claude_ArrayHierarchical = (): void =>
  _test_llm_schema({
    model: "claude",
    name: "ArrayHierarchical",
  })(typia.llm.schema<ArrayHierarchical, "claude">({}));