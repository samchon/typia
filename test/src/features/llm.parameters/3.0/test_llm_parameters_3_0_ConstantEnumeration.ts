import typia from "typia";

import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";
import { ConstantEnumeration } from "../../../structures/ConstantEnumeration";

export const test_llm_parameters_3_0_ConstantEnumeration = (): void =>
  _test_llm_parameters({
    model: "3.0",
    name: "ConstantEnumeration",
  })(typia.llm.parameters<ConstantEnumerationParameters, "3.0">());

interface ConstantEnumerationParameters {
  regular: ConstantEnumeration;
  nullable: ConstantEnumeration | null;
  optional: ConstantEnumeration | undefined;
  faint: ConstantEnumeration | null | undefined;
  array: Array<ConstantEnumeration>;
}
