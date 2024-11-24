import typia from "typia";

import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";
import { DynamicUndefined } from "../../../structures/DynamicUndefined";

export const test_llm_parameters_claude_DynamicUndefined = _test_llm_parameters(
  {
    model: "claude",
    name: "DynamicUndefined",
  },
)(typia.llm.parameters<DynamicUndefinedParameters, "claude">());

interface DynamicUndefinedParameters {
  regular: DynamicUndefined;
  nullable: DynamicUndefined | null;
  optional: DynamicUndefined | undefined;
  faint: DynamicUndefined | null | undefined;
  array: Array<DynamicUndefined>;
}
