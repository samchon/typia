import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { DynamicEnumeration } from "../../../structures/DynamicEnumeration";

export const test_llm_application_3_1_DynamicEnumeration = (): void =>
  _test_llm_application({
    model: "3.1",
    name: "DynamicEnumeration",
    factory: DynamicEnumeration,
  })(typia.llm.application<DynamicEnumerationApplication, "3.1">());

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
