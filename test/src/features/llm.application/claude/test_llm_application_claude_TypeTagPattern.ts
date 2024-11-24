import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { TypeTagPattern } from "../../../structures/TypeTagPattern";

export const test_llm_application_claude_TypeTagPattern = _test_llm_application(
  {
    model: "claude",
    name: "TypeTagPattern",
  },
)(typia.llm.application<TypeTagPatternApplication, "claude">());

interface TypeTagPatternApplication {
  insert(first: TypeTagPattern): Promise<void>;
  reduce(
    first: TypeTagPattern,
    second: TypeTagPattern | null,
  ): Promise<TypeTagPattern>;
  coalesce(
    first: TypeTagPattern | null,
    second: TypeTagPattern | null,
    third?: TypeTagPattern | null,
  ): Promise<TypeTagPattern | null>;
}
