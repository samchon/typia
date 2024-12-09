import typia from "typia";

import { _test_llm_applicationOfValidate } from "../../../internal/_test_llm_applicationOfValidate";
import { DynamicEnumeration } from "../../../structures/DynamicEnumeration";

export const test_llm_applicationOfValidate_llama_DynamicEnumeration =
  _test_llm_applicationOfValidate({
    model: "llama",
    name: "DynamicEnumeration",
    factory: DynamicEnumeration,
  })(typia.llm.applicationOfValidate<DynamicEnumerationApplication, "llama">());

interface DynamicEnumerationApplication {
  insert(p: { first: DynamicEnumeration }): Promise<void>;
  reduce(p: {
    first: DynamicEnumeration;
    second: DynamicEnumeration | null;
  }): Promise<DynamicEnumeration>;
  coalesce(p: {
    first: DynamicEnumeration | null;
    second: DynamicEnumeration | null;
    third?: DynamicEnumeration | null;
  }): Promise<DynamicEnumeration | null>;
}
