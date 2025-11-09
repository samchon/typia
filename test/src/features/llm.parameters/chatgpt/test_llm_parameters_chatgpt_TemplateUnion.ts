import typia from "typia";
import { TemplateUnion } from "../../../structures/TemplateUnion";
import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";

export const test_llm_parameters_chatgpt_TemplateUnion = (): void =>
  _test_llm_parameters({
    model: "chatgpt",
    name: "TemplateUnion",
  })(
    typia.llm.parameters<TemplateUnionParameters, "chatgpt">(),
  );

interface TemplateUnionParameters {
  regular: TemplateUnion;
  nullable: TemplateUnion | null;
  optional: TemplateUnion | undefined;
  faint: TemplateUnion | null | undefined;
  array: Array<TemplateUnion>;
}