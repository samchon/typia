import typia from "typia";
import { ArrayUnion } from "../../../structures/ArrayUnion";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_claude_ArrayUnion = (): void =>
  _test_llm_schema({
    model: "claude",
    name: "ArrayUnion",
  })(typia.llm.schema<ArrayUnion, "claude">({}));