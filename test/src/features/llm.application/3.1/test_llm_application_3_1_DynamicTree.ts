import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { DynamicTree } from "../../../structures/DynamicTree";

export const test_llm_application_3_1_DynamicTree = _test_llm_application({
  model: "3.1",
  name: "DynamicTree",
})(typia.llm.application<DynamicTreeApplication, "3.1">());

interface DynamicTreeApplication {
  insert(first: DynamicTree): Promise<void>;
  reduce(first: DynamicTree, second: DynamicTree | null): Promise<DynamicTree>;
  coalesce(
    first: DynamicTree | null,
    second: DynamicTree | null,
    third?: DynamicTree | null,
  ): Promise<DynamicTree | null>;
}
