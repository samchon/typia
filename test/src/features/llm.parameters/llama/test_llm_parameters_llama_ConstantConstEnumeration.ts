import typia from "typia";

import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";
import { ConstantConstEnumeration } from "../../../structures/ConstantConstEnumeration";

export const test_llm_parameters_llama_ConstantConstEnumeration = (): void =>
  _test_llm_parameters({
    model: "llama",
    name: "ConstantConstEnumeration",
  })(typia.llm.parameters<ConstantConstEnumerationParameters, "llama">());

interface ConstantConstEnumerationParameters {
  regular: ConstantConstEnumeration;
  nullable: ConstantConstEnumeration | null;
  optional: ConstantConstEnumeration | undefined;
  faint: ConstantConstEnumeration | null | undefined;
  array: Array<ConstantConstEnumeration>;
}
