import typia from "typia";

import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";
import { DynamicEnumeration } from "../../../structures/DynamicEnumeration";

export const test_llm_parameters_gemini_DynamicEnumeration =
  _test_llm_parameters({
    model: "gemini",
    name: "DynamicEnumeration",
  })(typia.llm.parameters<DynamicEnumerationParameters, "gemini">());

interface DynamicEnumerationParameters {
  regular: DynamicEnumeration;
  nullable: DynamicEnumeration | null;
  optional: DynamicEnumeration | undefined;
  faint: DynamicEnumeration | null | undefined;
  array: Array<DynamicEnumeration>;
}
