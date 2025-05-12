import typia from "typia";

import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";
import { ToJsonDouble } from "../../../structures/ToJsonDouble";

export const test_llm_parameters_chatgpt_ToJsonDouble = _test_llm_parameters({
  model: "chatgpt",
  name: "ToJsonDouble",
})(typia.llm.parameters<ToJsonDoubleParameters, "chatgpt">());

interface ToJsonDoubleParameters {
  regular: ToJsonDouble;
  nullable: ToJsonDouble | null;
  optional: ToJsonDouble | undefined;
  faint: ToJsonDouble | null | undefined;
  array: Array<ToJsonDouble>;
}
