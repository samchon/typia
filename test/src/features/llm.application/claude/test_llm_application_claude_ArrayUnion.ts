import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { ArrayUnion } from "../../../structures/ArrayUnion";

export const test_llm_application_claude_ArrayUnion = _test_llm_application({
  model: "claude",
  name: "ArrayUnion",
})(typia.llm.application<ArrayUnionApplication, "claude">());

interface ArrayUnionApplication {
  insert(first: ArrayUnion): Promise<void>;
  reduce(first: ArrayUnion, second: ArrayUnion | null): Promise<ArrayUnion>;
  coalesce(
    first: ArrayUnion | null,
    second: ArrayUnion | null,
    third?: ArrayUnion | null,
  ): Promise<ArrayUnion | null>;
}
