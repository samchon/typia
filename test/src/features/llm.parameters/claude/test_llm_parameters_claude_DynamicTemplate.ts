import typia from "typia";
import { DynamicTemplate } from "../../../structures/DynamicTemplate";
import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";

export const test_llm_parameters_claude_DynamicTemplate = (): void =>
  _test_llm_parameters({
    model: "claude",
    name: "DynamicTemplate",
  })(
    typia.llm.parameters<DynamicTemplateParameters, "claude">(),
  );

interface DynamicTemplateParameters {
  regular: DynamicTemplate;
  nullable: DynamicTemplate | null;
  optional: DynamicTemplate | undefined;
  faint: DynamicTemplate | null | undefined;
  array: Array<DynamicTemplate>;
}