import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { ToJsonUnion } from "../../../structures/ToJsonUnion";

export const test_llm_application_claude_ToJsonUnion = _test_llm_application({
  model: "claude",
  name: "ToJsonUnion",
})(typia.llm.application<ToJsonUnionApplication, "claude">());

interface ToJsonUnionApplication {
  insert(first: ToJsonUnion): Promise<void>;
  reduce(first: ToJsonUnion, second: ToJsonUnion | null): Promise<ToJsonUnion>;
  coalesce(
    first: ToJsonUnion | null,
    second: ToJsonUnion | null,
    third?: ToJsonUnion | null,
  ): Promise<ToJsonUnion | null>;
}
