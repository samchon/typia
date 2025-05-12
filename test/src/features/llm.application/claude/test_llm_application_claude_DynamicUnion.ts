import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { DynamicUnion } from "../../../structures/DynamicUnion";

export const test_llm_application_claude_DynamicUnion = _test_llm_application({
  model: "claude",
  name: "DynamicUnion",
  factory: DynamicUnion,
})(typia.llm.application<DynamicUnionApplication, "claude">());

interface DynamicUnionApplication {
  insert(p: { first: DynamicUnion }): Promise<void>;
  reduce(p: {
    first: DynamicUnion;
    second: DynamicUnion | null;
  }): Promise<DynamicUnion>;
  coalesce(p: {
    first: DynamicUnion | null;
    second: DynamicUnion | null;
    third?: DynamicUnion | null;
  }): Promise<DynamicUnion | null>;
}
