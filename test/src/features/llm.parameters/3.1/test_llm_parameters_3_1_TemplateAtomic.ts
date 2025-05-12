import typia from "typia";

import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";
import { TemplateAtomic } from "../../../structures/TemplateAtomic";

export const test_llm_parameters_3_1_TemplateAtomic = _test_llm_parameters({
  model: "3.1",
  name: "TemplateAtomic",
})(typia.llm.parameters<TemplateAtomicParameters, "3.1">());

interface TemplateAtomicParameters {
  regular: TemplateAtomic;
  nullable: TemplateAtomic | null;
  optional: TemplateAtomic | undefined;
  faint: TemplateAtomic | null | undefined;
  array: Array<TemplateAtomic>;
}
