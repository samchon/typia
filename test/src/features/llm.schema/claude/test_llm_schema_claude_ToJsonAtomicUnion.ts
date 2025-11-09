import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { ToJsonAtomicUnion } from "../../../structures/ToJsonAtomicUnion";

export const test_llm_schema_claude_ToJsonAtomicUnion = (): void =>
  _test_llm_schema({
    model: "claude",
    name: "ToJsonAtomicUnion",
  })(typia.llm.schema<ToJsonAtomicUnion, "claude">({}));
