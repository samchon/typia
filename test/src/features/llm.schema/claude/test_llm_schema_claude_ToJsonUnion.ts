import typia from "typia";
import { ToJsonUnion } from "../../../structures/ToJsonUnion";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_claude_ToJsonUnion = (): void =>
  _test_llm_schema({
    model: "claude",
    name: "ToJsonUnion",
  })(typia.llm.schema<ToJsonUnion, "claude">({}));