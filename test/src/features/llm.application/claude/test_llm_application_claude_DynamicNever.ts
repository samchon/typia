import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { DynamicNever } from "../../../structures/DynamicNever";

export const test_llm_application_claude_DynamicNever = _test_llm_application({
  model: "claude",
  name: "DynamicNever",
})(typia.llm.application<DynamicNeverApplication, "claude">());

interface DynamicNeverApplication {
  insert(first: DynamicNever): Promise<void>;
  reduce(
    first: DynamicNever,
    second: DynamicNever | null,
  ): Promise<DynamicNever>;
  coalesce(
    first: DynamicNever | null,
    second: DynamicNever | null,
    third?: DynamicNever | null,
  ): Promise<DynamicNever | null>;
}
