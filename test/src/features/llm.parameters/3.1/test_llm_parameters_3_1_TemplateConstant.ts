import typia from "typia";
import { TemplateConstant } from "../../../structures/TemplateConstant";
import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";

export const test_llm_parameters_3_1_TemplateConstant = (): void =>
  _test_llm_parameters({
    model: "3.1",
    name: "TemplateConstant",
  })(
    typia.llm.parameters<TemplateConstantParameters, "3.1">(),
  );

interface TemplateConstantParameters {
  regular: TemplateConstant;
  nullable: TemplateConstant | null;
  optional: TemplateConstant | undefined;
  faint: TemplateConstant | null | undefined;
  array: Array<TemplateConstant>;
}