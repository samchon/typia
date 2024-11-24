import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { DynamicUndefined } from "../../../structures/DynamicUndefined";

export const test_llm_application_claude_DynamicUndefined =
  _test_llm_application({
    model: "claude",
    name: "DynamicUndefined",
  })(typia.llm.application<DynamicUndefinedApplication, "claude">());

interface DynamicUndefinedApplication {
  insert(first: DynamicUndefined): Promise<void>;
  reduce(
    first: DynamicUndefined,
    second: DynamicUndefined | null,
  ): Promise<DynamicUndefined>;
  coalesce(
    first: DynamicUndefined | null,
    second: DynamicUndefined | null,
    third?: DynamicUndefined | null,
  ): Promise<DynamicUndefined | null>;
}
