import typia from "typia";

import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";
import { DynamicSimple } from "../../../structures/DynamicSimple";

export const test_llm_parameters_chatgpt_DynamicSimple = _test_llm_parameters({
  model: "chatgpt",
  name: "DynamicSimple",
})(typia.llm.parameters<DynamicSimpleParameters, "chatgpt">());

interface DynamicSimpleParameters {
  regular: DynamicSimple;
  nullable: DynamicSimple | null;
  optional: DynamicSimple | undefined;
  faint: DynamicSimple | null | undefined;
  array: Array<DynamicSimple>;
}
