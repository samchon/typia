import typia from "typia";

import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";
import { TemplateAtomic } from "../../../structures/TemplateAtomic";

export const test_llm_parameters_chatgpt_TemplateAtomic = _test_llm_parameters({
  model: "chatgpt",
  name: "TemplateAtomic",
})(typia.llm.parameters<TemplateAtomicParameters, "chatgpt">());

interface TemplateAtomicParameters {
  regular: TemplateAtomic;
  nullable: TemplateAtomic | null;
  optional: TemplateAtomic | undefined;
  faint: TemplateAtomic | null | undefined;
  array: Array<TemplateAtomic>;
}
