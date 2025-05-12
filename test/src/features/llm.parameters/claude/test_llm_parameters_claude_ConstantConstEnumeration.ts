import typia from "typia";

import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";
import { ConstantConstEnumeration } from "../../../structures/ConstantConstEnumeration";

export const test_llm_parameters_claude_ConstantConstEnumeration =
  _test_llm_parameters({
    model: "claude",
    name: "ConstantConstEnumeration",
  })(typia.llm.parameters<ConstantConstEnumerationParameters, "claude">());

interface ConstantConstEnumerationParameters {
  regular: ConstantConstEnumeration;
  nullable: ConstantConstEnumeration | null;
  optional: ConstantConstEnumeration | undefined;
  faint: ConstantConstEnumeration | null | undefined;
  array: Array<ConstantConstEnumeration>;
}
