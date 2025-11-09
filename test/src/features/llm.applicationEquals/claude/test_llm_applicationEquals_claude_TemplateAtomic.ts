import typia from "typia";
import { TemplateAtomic } from "../../../structures/TemplateAtomic";
import { _test_llm_applicationEquals } from "../../../internal/_test_llm_applicationEquals";

export const test_llm_applicationEquals_claude_TemplateAtomic = (): void =>
  _test_llm_applicationEquals({
    model: "claude",
    name: "TemplateAtomic",
    factory: TemplateAtomic
  })(
    typia.llm.application<TemplateAtomicApplication, "claude", { equals: true }>(),
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