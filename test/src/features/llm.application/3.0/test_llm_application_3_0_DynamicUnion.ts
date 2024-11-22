import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { DynamicUnion } from "../../../structures/DynamicUnion";

export const test_llm_application_3_0_DynamicUnion = _test_llm_application({
  model: "3.0",
  name: "DynamicUnion",
})(typia.llm.application<DynamicUnionApplication, "3.0">());

interface DynamicUnionApplication {
  insert(first: DynamicUnion): Promise<void>;
  reduce(
    first: DynamicUnion,
    second: DynamicUnion | null,
  ): Promise<DynamicUnion>;
  coalesce(
    first: DynamicUnion | null,
    second: DynamicUnion | null,
    third?: DynamicUnion | null,
  ): Promise<DynamicUnion | null>;
}
