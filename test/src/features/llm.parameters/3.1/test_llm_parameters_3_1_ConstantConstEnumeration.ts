import typia from "typia";

import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";
import { ConstantConstEnumeration } from "../../../structures/ConstantConstEnumeration";

export const test_llm_parameters_3_1_ConstantConstEnumeration =
  _test_llm_parameters({
    model: "3.1",
    name: "ConstantConstEnumeration",
  })(typia.llm.parameters<ConstantConstEnumerationParameters, "3.1">());

interface ConstantConstEnumerationParameters {
  regular: ConstantConstEnumeration;
  nullable: ConstantConstEnumeration | null;
  optional: ConstantConstEnumeration | undefined;
  faint: ConstantConstEnumeration | null | undefined;
  array: Array<ConstantConstEnumeration>;
}
