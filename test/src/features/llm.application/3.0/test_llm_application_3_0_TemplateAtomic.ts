import typia from "typia";
import { TemplateAtomic } from "../../../structures/TemplateAtomic";
import { _test_llm_application } from "../../../internal/_test_llm_application";

export const test_llm_application_3_0_TemplateAtomic = (): void =>
  _test_llm_application({
    model: "3.0",
    name: "TemplateAtomic",
    factory: TemplateAtomic
  })(
    typia.llm.application<TemplateAtomicApplication, "3.0">(),
  );

interface TemplateAtomicApplication {
  insert(p: { first: TemplateAtomic }): Promise<void>;
  reduce(p: { first: TemplateAtomic, second: TemplateAtomic | null }): Promise<TemplateAtomic>;
  coalesce(p: {
    first: TemplateAtomic | null,
    second: TemplateAtomic | null,
    third?: TemplateAtomic | null,
  }): Promise<TemplateAtomic | null>;
}