import typia from "typia";

import { _test_llm_applicationOfValidate } from "../../../internal/_test_llm_applicationOfValidate";
import { DynamicNever } from "../../../structures/DynamicNever";

export const test_llm_applicationOfValidate_claude_DynamicNever =
  _test_llm_applicationOfValidate({
    model: "claude",
    name: "DynamicNever",
    factory: DynamicNever,
  })(typia.llm.applicationOfValidate<DynamicNeverApplication, "claude">());

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
