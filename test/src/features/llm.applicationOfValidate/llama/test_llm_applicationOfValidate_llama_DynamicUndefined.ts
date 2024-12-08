import typia from "typia";

import { _test_llm_applicationOfValidate } from "../../../internal/_test_llm_applicationOfValidate";
import { DynamicUndefined } from "../../../structures/DynamicUndefined";

export const test_llm_applicationOfValidate_llama_DynamicUndefined =
  _test_llm_applicationOfValidate({
    model: "llama",
    name: "DynamicUndefined",
    factory: DynamicUndefined,
  })(typia.llm.applicationOfValidate<DynamicUndefinedApplication, "llama">());

interface DynamicUndefinedApplication {
  insert(p: { first: DynamicUndefined }): Promise<void>;
  reduce(p: {
    first: DynamicUndefined;
    second: DynamicUndefined | null;
  }): Promise<DynamicUndefined>;
  coalesce(p: {
    first: DynamicUndefined | null;
    second: DynamicUndefined | null;
    third?: DynamicUndefined | null;
  }): Promise<DynamicUndefined | null>;
}
