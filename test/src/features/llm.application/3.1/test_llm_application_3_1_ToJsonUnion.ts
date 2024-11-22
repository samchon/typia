import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { ToJsonUnion } from "../../../structures/ToJsonUnion";

export const test_llm_application_3_1_ToJsonUnion = _test_llm_application({
  model: "3.1",
  name: "ToJsonUnion",
})(typia.llm.application<ToJsonUnionApplication, "3.1">());

interface ToJsonUnionApplication {
  insert(first: ToJsonUnion): Promise<void>;
  reduce(first: ToJsonUnion, second: ToJsonUnion | null): Promise<ToJsonUnion>;
  coalesce(
    first: ToJsonUnion | null,
    second: ToJsonUnion | null,
    third?: ToJsonUnion | null,
  ): Promise<ToJsonUnion | null>;
}
