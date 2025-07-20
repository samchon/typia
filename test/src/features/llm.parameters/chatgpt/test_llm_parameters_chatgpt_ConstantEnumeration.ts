import typia from "typia";

import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";
import { ConstantEnumeration } from "../../../structures/ConstantEnumeration";

export const test_llm_parameters_chatgpt_ConstantEnumeration = (): void =>
  _test_llm_parameters({
    model: "chatgpt",
    name: "ConstantEnumeration",
  })(typia.llm.parameters<ConstantEnumerationParameters, "chatgpt">());

interface ConstantEnumerationParameters {
  regular: ConstantEnumeration;
  nullable: ConstantEnumeration | null;
  optional: ConstantEnumeration | undefined;
  faint: ConstantEnumeration | null | undefined;
  array: Array<ConstantEnumeration>;
}
