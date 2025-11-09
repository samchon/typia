import typia from "typia";
import { TemplateUnion } from "../../../structures/TemplateUnion";
import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";

export const test_llm_parameters_3_1_TemplateUnion = (): void =>
  _test_llm_parameters({
    model: "3.1",
    name: "TemplateUnion",
  })(
    typia.llm.parameters<TemplateUnionParameters, "3.1">(),
  );

interface TemplateUnionParameters {
  regular: TemplateUnion;
  nullable: TemplateUnion | null;
  optional: TemplateUnion | undefined;
  faint: TemplateUnion | null | undefined;
  array: Array<TemplateUnion>;
}