import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { TypeTagDefault } from "../../../structures/TypeTagDefault";

export const test_llm_application_claude_TypeTagDefault = _test_llm_application(
  {
    model: "claude",
    name: "TypeTagDefault",
  },
)(typia.llm.application<TypeTagDefaultApplication, "claude">());

interface TypeTagDefaultApplication {
  insert(first: TypeTagDefault): Promise<void>;
  reduce(
    first: TypeTagDefault,
    second: TypeTagDefault | null,
  ): Promise<TypeTagDefault>;
  coalesce(
    first: TypeTagDefault | null,
    second: TypeTagDefault | null,
    third?: TypeTagDefault | null,
  ): Promise<TypeTagDefault | null>;
}
