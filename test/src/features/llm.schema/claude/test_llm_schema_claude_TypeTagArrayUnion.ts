import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { TypeTagArrayUnion } from "../../../structures/TypeTagArrayUnion";

export const test_llm_schema_claude_TypeTagArrayUnion = (): void =>
  _test_llm_schema({
    model: "claude",
    name: "TypeTagArrayUnion",
  })(typia.llm.schema<TypeTagArrayUnion, "claude">({}));
