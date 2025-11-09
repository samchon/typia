import typia from "typia";

import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";
import { DynamicEnumeration } from "../../../structures/DynamicEnumeration";

export const test_llm_parameters_3_1_DynamicEnumeration = (): void =>
  _test_llm_parameters({
    model: "3.1",
    name: "DynamicEnumeration",
  })(typia.llm.parameters<DynamicEnumerationParameters, "3.1">());

interface DynamicEnumerationParameters {
  regular: DynamicEnumeration;
  nullable: DynamicEnumeration | null;
  optional: DynamicEnumeration | undefined;
  faint: DynamicEnumeration | null | undefined;
  array: Array<DynamicEnumeration>;
}
