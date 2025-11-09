import typia from "typia";
import { ArrayAny } from "../../../structures/ArrayAny";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_claude_ArrayAny = (): void =>
  _test_llm_schema({
    model: "claude",
    name: "ArrayAny",
  })(typia.llm.schema<ArrayAny, "claude">({}));