import typia from "typia";

import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";
import { DynamicComposite } from "../../../structures/DynamicComposite";

export const test_llm_parameters_3_1_DynamicComposite = (): void =>
  _test_llm_parameters({
    model: "3.1",
    name: "DynamicComposite",
  })(typia.llm.parameters<DynamicCompositeParameters, "3.1">());

interface DynamicCompositeParameters {
  regular: DynamicComposite;
  nullable: DynamicComposite | null;
  optional: DynamicComposite | undefined;
  faint: DynamicComposite | null | undefined;
  array: Array<DynamicComposite>;
}
