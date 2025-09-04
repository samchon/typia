import typia from "typia";

import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";
import { DynamicEnumeration } from "../../../structures/DynamicEnumeration";

export const test_llm_parameters_llama_DynamicEnumeration = (): void =>
  _test_llm_parameters({
    model: "llama",
    name: "DynamicEnumeration",
  })(typia.llm.parameters<DynamicEnumerationParameters, "llama">());

interface DynamicEnumerationParameters {
  regular: DynamicEnumeration;
  nullable: DynamicEnumeration | null;
  optional: DynamicEnumeration | undefined;
  faint: DynamicEnumeration | null | undefined;
  array: Array<DynamicEnumeration>;
}
