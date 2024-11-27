import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { ConstantConstEnumeration } from "../../../structures/ConstantConstEnumeration";

export const test_llm_application_chatgpt_ConstantConstEnumeration =
  _test_llm_application({
    model: "chatgpt",
    name: "ConstantConstEnumeration",
  })(typia.llm.application<ConstantConstEnumerationApplication, "chatgpt">());

interface ConstantConstEnumerationApplication {
  insert(p: { first: ConstantConstEnumeration }): Promise<void>;
  reduce(p: {
    first: ConstantConstEnumeration;
    second: ConstantConstEnumeration | null;
  }): Promise<ConstantConstEnumeration>;
  coalesce(p: {
    first: ConstantConstEnumeration | null;
    second: ConstantConstEnumeration | null;
    third?: ConstantConstEnumeration | null;
  }): Promise<ConstantConstEnumeration | null>;
}
