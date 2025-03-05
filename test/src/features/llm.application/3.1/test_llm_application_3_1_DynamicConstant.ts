import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { DynamicConstant } from "../../../structures/DynamicConstant";

export const test_llm_application_3_1_DynamicConstant = _test_llm_application({
  model: "3.1",
  name: "DynamicConstant",
  factory: DynamicConstant,
})(typia.llm.application<DynamicConstantApplication, "3.1">());

interface DynamicConstantApplication {
  insert(p: { first: DynamicConstant }): Promise<void>;
  reduce(p: {
    first: DynamicConstant;
    second: DynamicConstant | null;
  }): Promise<DynamicConstant>;
  coalesce(p: {
    first: DynamicConstant | null;
    second: DynamicConstant | null;
    third?: DynamicConstant | null;
  }): Promise<DynamicConstant | null>;
}
