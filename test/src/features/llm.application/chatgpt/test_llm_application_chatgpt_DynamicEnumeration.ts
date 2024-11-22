import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { DynamicEnumeration } from "../../../structures/DynamicEnumeration";

export const test_llm_application_chatgpt_DynamicEnumeration =
  _test_llm_application({
    model: "chatgpt",
    name: "DynamicEnumeration",
  })(typia.llm.application<DynamicEnumerationApplication, "chatgpt">());

interface DynamicEnumerationApplication {
  insert(first: DynamicEnumeration): Promise<void>;
  reduce(
    first: DynamicEnumeration,
    second: DynamicEnumeration | null,
  ): Promise<DynamicEnumeration>;
  coalesce(
    first: DynamicEnumeration | null,
    second: DynamicEnumeration | null,
    third?: DynamicEnumeration | null,
  ): Promise<DynamicEnumeration | null>;
}
