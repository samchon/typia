import typia from "typia";
import { TemplateAtomic } from "../../../structures/TemplateAtomic";
import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";

export const test_llm_parameters_gemini_TemplateAtomic = (): void =>
  _test_llm_parameters({
    model: "gemini",
    name: "TemplateAtomic",
  })(
    typia.llm.parameters<TemplateAtomicParameters, "gemini">(),
  );

interface TemplateAtomicParameters {
  regular: TemplateAtomic;
  nullable: TemplateAtomic | null;
  optional: TemplateAtomic | undefined;
  faint: TemplateAtomic | null | undefined;
  array: Array<TemplateAtomic>;
}