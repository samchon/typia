import typia from "typia";
import { DynamicEnumeration } from "../../../structures/DynamicEnumeration";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_claude_DynamicEnumeration = (): void =>
  _test_llm_schema({
    model: "claude",
    name: "DynamicEnumeration",
  })(typia.llm.schema<DynamicEnumeration, "claude">({}));