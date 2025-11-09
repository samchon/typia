import typia from "typia";

import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";
import { DynamicTree } from "../../../structures/DynamicTree";

export const test_llm_parameters_claude_DynamicTree = (): void =>
  _test_llm_parameters({
    model: "claude",
    name: "DynamicTree",
  })(typia.llm.parameters<DynamicTreeParameters, "claude">());

interface DynamicTreeParameters {
  regular: DynamicTree;
  nullable: DynamicTree | null;
  optional: DynamicTree | undefined;
  faint: DynamicTree | null | undefined;
  array: Array<DynamicTree>;
}
