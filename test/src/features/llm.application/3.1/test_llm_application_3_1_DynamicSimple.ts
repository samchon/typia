import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { DynamicSimple } from "../../../structures/DynamicSimple";

export const test_llm_application_3_1_DynamicSimple = _test_llm_application({
  model: "3.1",
  name: "DynamicSimple",
})(typia.llm.application<DynamicSimpleApplication, "3.1">());

interface DynamicSimpleApplication {
  insert(first: DynamicSimple): Promise<void>;
  reduce(
    first: DynamicSimple,
    second: DynamicSimple | null,
  ): Promise<DynamicSimple>;
  coalesce(
    first: DynamicSimple | null,
    second: DynamicSimple | null,
    third?: DynamicSimple | null,
  ): Promise<DynamicSimple | null>;
}
