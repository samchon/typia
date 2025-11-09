import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { TypeTagAtomicUnion } from "../../../structures/TypeTagAtomicUnion";

export const test_llm_schema_claude_TypeTagAtomicUnion = (): void =>
  _test_llm_schema({
    model: "claude",
    name: "TypeTagAtomicUnion",
  })(typia.llm.schema<TypeTagAtomicUnion, "claude">({}));
