import typia from "typia";

import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";
import { DynamicComposite } from "../../../structures/DynamicComposite";

export const test_llm_parameters_claude_DynamicComposite = _test_llm_parameters(
  {
    model: "claude",
    name: "DynamicComposite",
  },
)(typia.llm.parameters<DynamicCompositeParameters, "claude">());

interface DynamicCompositeParameters {
  regular: DynamicComposite;
  nullable: DynamicComposite | null;
  optional: DynamicComposite | undefined;
  faint: DynamicComposite | null | undefined;
  array: Array<DynamicComposite>;
}
