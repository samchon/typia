import typia from "typia";

import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";
import { ConstantEnumeration } from "../../../structures/ConstantEnumeration";

export const test_llm_parameters_3_1_ConstantEnumeration = (): void =>
  _test_llm_parameters({
    model: "3.1",
    name: "ConstantEnumeration",
  })(typia.llm.parameters<ConstantEnumerationParameters, "3.1">());

interface ConstantEnumerationParameters {
  regular: ConstantEnumeration;
  nullable: ConstantEnumeration | null;
  optional: ConstantEnumeration | undefined;
  faint: ConstantEnumeration | null | undefined;
  array: Array<ConstantEnumeration>;
}
