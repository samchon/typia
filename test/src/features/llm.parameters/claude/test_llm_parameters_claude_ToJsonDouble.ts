import typia from "typia";

import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";
import { ToJsonDouble } from "../../../structures/ToJsonDouble";

export const test_llm_parameters_claude_ToJsonDouble = _test_llm_parameters({
  model: "claude",
  name: "ToJsonDouble",
})(typia.llm.parameters<ToJsonDoubleParameters, "claude">());

interface ToJsonDoubleParameters {
  regular: ToJsonDouble;
  nullable: ToJsonDouble | null;
  optional: ToJsonDouble | undefined;
  faint: ToJsonDouble | null | undefined;
  array: Array<ToJsonDouble>;
}
