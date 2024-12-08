import typia from "typia";

import { _test_llm_applicationOfValidate } from "../../../internal/_test_llm_applicationOfValidate";
import { DynamicNever } from "../../../structures/DynamicNever";

export const test_llm_applicationOfValidate_3_0_DynamicNever =
  _test_llm_applicationOfValidate({
    model: "3.0",
    name: "DynamicNever",
    factory: DynamicNever,
  })(typia.llm.applicationOfValidate<DynamicNeverApplication, "3.0">());

interface DynamicNeverApplication {
  insert(p: { first: DynamicNever }): Promise<void>;
  reduce(p: {
    first: DynamicNever;
    second: DynamicNever | null;
  }): Promise<DynamicNever>;
  coalesce(p: {
    first: DynamicNever | null;
    second: DynamicNever | null;
    third?: DynamicNever | null;
  }): Promise<DynamicNever | null>;
}
