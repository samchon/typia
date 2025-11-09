import typia from "typia";
import { TemplateConstant } from "../../../structures/TemplateConstant";
import { _test_llm_application } from "../../../internal/_test_llm_application";

export const test_llm_application_claude_TemplateConstant = (): void =>
  _test_llm_application({
    model: "claude",
    name: "TemplateConstant",
    factory: TemplateConstant
  })(
    typia.llm.application<TemplateConstantApplication, "claude">(),
  );

interface TemplateConstantApplication {
  insert(p: { first: TemplateConstant }): Promise<void>;
  reduce(p: { first: TemplateConstant, second: TemplateConstant | null }): Promise<TemplateConstant>;
  coalesce(p: {
    first: TemplateConstant | null,
    second: TemplateConstant | null,
    third?: TemplateConstant | null,
  }): Promise<TemplateConstant | null>;
}