import typia from "typia";
import { DynamicArray } from "../../../structures/DynamicArray";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_claude_DynamicArray = (): void =>
  _test_llm_schema({
    model: "claude",
    name: "DynamicArray",
  })(typia.llm.schema<DynamicArray, "claude">({}));