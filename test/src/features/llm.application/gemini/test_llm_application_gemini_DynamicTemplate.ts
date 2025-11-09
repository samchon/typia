import typia from "typia";
import { DynamicTemplate } from "../../../structures/DynamicTemplate";
import { _test_llm_application } from "../../../internal/_test_llm_application";

export const test_llm_application_gemini_DynamicTemplate = (): void =>
  _test_llm_application({
    model: "gemini",
    name: "DynamicTemplate",
    factory: DynamicTemplate
  })(
    typia.llm.application<DynamicTemplateApplication, "gemini">(),
  );

interface DynamicTemplateApplication {
  insert(p: { first: DynamicTemplate }): Promise<void>;
  reduce(p: { first: DynamicTemplate, second: DynamicTemplate | null }): Promise<DynamicTemplate>;
  coalesce(p: {
    first: DynamicTemplate | null,
    second: DynamicTemplate | null,
    third?: DynamicTemplate | null,
  }): Promise<DynamicTemplate | null>;
}