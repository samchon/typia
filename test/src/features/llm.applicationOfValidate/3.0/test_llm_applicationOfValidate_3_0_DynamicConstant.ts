import typia from "typia";

import { _test_llm_applicationOfValidate } from "../../../internal/_test_llm_applicationOfValidate";
import { DynamicConstant } from "../../../structures/DynamicConstant";

export const test_llm_applicationOfValidate_3_0_DynamicConstant =
  _test_llm_applicationOfValidate({
    model: "3.0",
    name: "DynamicConstant",
    factory: DynamicConstant,
  })(typia.llm.applicationOfValidate<DynamicConstantApplication, "3.0">());

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
