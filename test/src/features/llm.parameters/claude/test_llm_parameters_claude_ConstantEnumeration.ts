import typia from "typia";

import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";
import { ConstantEnumeration } from "../../../structures/ConstantEnumeration";

export const test_llm_parameters_claude_ConstantEnumeration =
  _test_llm_parameters({
    model: "claude",
    name: "ConstantEnumeration",
  })(typia.llm.parameters<ConstantEnumerationParameters, "claude">());

interface ConstantEnumerationParameters {
  regular: ConstantEnumeration;
  nullable: ConstantEnumeration | null;
  optional: ConstantEnumeration | undefined;
  faint: ConstantEnumeration | null | undefined;
  array: Array<ConstantEnumeration>;
}
