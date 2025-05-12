import typia from "typia";

import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";
import { ToJsonUnion } from "../../../structures/ToJsonUnion";

export const test_llm_parameters_claude_ToJsonUnion = _test_llm_parameters({
  model: "claude",
  name: "ToJsonUnion",
})(typia.llm.parameters<ToJsonUnionParameters, "claude">());

interface ToJsonUnionParameters {
  regular: ToJsonUnion;
  nullable: ToJsonUnion | null;
  optional: ToJsonUnion | undefined;
  faint: ToJsonUnion | null | undefined;
  array: Array<ToJsonUnion>;
}
