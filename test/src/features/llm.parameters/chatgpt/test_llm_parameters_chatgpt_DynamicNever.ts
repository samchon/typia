import typia from "typia";

import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";
import { DynamicNever } from "../../../structures/DynamicNever";

export const test_llm_parameters_chatgpt_DynamicNever = _test_llm_parameters({
  model: "chatgpt",
  name: "DynamicNever",
})(typia.llm.parameters<DynamicNeverParameters, "chatgpt">());

interface DynamicNeverParameters {
  regular: DynamicNever;
  nullable: DynamicNever | null;
  optional: DynamicNever | undefined;
  faint: DynamicNever | null | undefined;
  array: Array<DynamicNever>;
}
