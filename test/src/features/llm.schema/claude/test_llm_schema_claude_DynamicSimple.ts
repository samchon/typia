import typia from "typia";
import { DynamicSimple } from "../../../structures/DynamicSimple";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_claude_DynamicSimple = (): void =>
  _test_llm_schema({
    model: "claude",
    name: "DynamicSimple",
  })(typia.llm.schema<DynamicSimple, "claude">({}));