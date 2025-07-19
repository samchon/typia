import typia from "typia";

import { _test_llm_applicationEquals } from "../../../internal/_test_llm_applicationEquals";
import { ArrayUnion } from "../../../structures/ArrayUnion";

export const test_llm_application_claude_ArrayUnion =
  _test_llm_applicationEquals({
    model: "claude",
    name: "ArrayUnion",
    factory: ArrayUnion,
  })(typia.llm.application<ArrayUnionApplication, "claude", { equal: true }>());

interface ArrayUnionApplication {
  insert(p: { first: ArrayUnion }): Promise<void>;
  reduce(p: {
    first: ArrayUnion;
    second: ArrayUnion | null;
  }): Promise<ArrayUnion>;
  coalesce(p: {
    first: ArrayUnion | null;
    second: ArrayUnion | null;
    third?: ArrayUnion | null;
  }): Promise<ArrayUnion | null>;
}
