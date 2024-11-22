import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { ConstantEnumeration } from "../../../structures/ConstantEnumeration";

export const test_llm_application_chatgpt_ConstantEnumeration =
  _test_llm_application({
    model: "chatgpt",
    name: "ConstantEnumeration",
  })(typia.llm.application<ConstantEnumerationApplication, "chatgpt">());

interface ConstantEnumerationApplication {
  insert(first: ConstantEnumeration): Promise<void>;
  reduce(
    first: ConstantEnumeration,
    second: ConstantEnumeration | null,
  ): Promise<ConstantEnumeration>;
  coalesce(
    first: ConstantEnumeration | null,
    second: ConstantEnumeration | null,
    third?: ConstantEnumeration | null,
  ): Promise<ConstantEnumeration | null>;
}
