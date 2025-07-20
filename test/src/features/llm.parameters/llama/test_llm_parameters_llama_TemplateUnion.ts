import typia from "typia";

import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";
import { TemplateUnion } from "../../../structures/TemplateUnion";

export const test_llm_parameters_llama_TemplateUnion = (): void =>
  _test_llm_parameters({
    model: "llama",
    name: "TemplateUnion",
  })(typia.llm.parameters<TemplateUnionParameters, "llama">());

interface TemplateUnionParameters {
  regular: TemplateUnion;
  nullable: TemplateUnion | null;
  optional: TemplateUnion | undefined;
  faint: TemplateUnion | null | undefined;
  array: Array<TemplateUnion>;
}
