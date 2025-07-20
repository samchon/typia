import typia from "typia";

import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";
import { DynamicComposite } from "../../../structures/DynamicComposite";

export const test_llm_parameters_llama_DynamicComposite = (): void =>
  _test_llm_parameters({
    model: "llama",
    name: "DynamicComposite",
  })(typia.llm.parameters<DynamicCompositeParameters, "llama">());

interface DynamicCompositeParameters {
  regular: DynamicComposite;
  nullable: DynamicComposite | null;
  optional: DynamicComposite | undefined;
  faint: DynamicComposite | null | undefined;
  array: Array<DynamicComposite>;
}
