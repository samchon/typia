import typia from "typia";
import { ArrayHierarchicalPointer } from "../../../structures/ArrayHierarchicalPointer";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_claude_ArrayHierarchicalPointer = (): void =>
  _test_llm_schema({
    model: "claude",
    name: "ArrayHierarchicalPointer",
  })(typia.llm.schema<ArrayHierarchicalPointer, "claude">({}));