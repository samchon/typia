import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { ToJsonUnion } from "../../../structures/ToJsonUnion";

export const test_llm_application_3_0_ToJsonUnion = _test_llm_application({
  model: "3.0",
  name: "ToJsonUnion",
  factory: ToJsonUnion,
})(typia.llm.application<ToJsonUnionApplication, "3.0">());

interface ToJsonUnionApplication {
  insert(p: { first: ToJsonUnion }): Promise<void>;
  reduce(p: {
    first: ToJsonUnion;
    second: ToJsonUnion | null;
  }): Promise<ToJsonUnion>;
  coalesce(p: {
    first: ToJsonUnion | null;
    second: ToJsonUnion | null;
    third?: ToJsonUnion | null;
  }): Promise<ToJsonUnion | null>;
}
