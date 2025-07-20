import typia from "typia";

import { _test_llm_applicationEquals } from "../../../internal/_test_llm_applicationEquals";
import { TemplateAtomic } from "../../../structures/TemplateAtomic";

export const test_llm_applicationEquals_chatgpt_TemplateAtomic = (): void =>
  _test_llm_applicationEquals({
    model: "chatgpt",
    name: "TemplateAtomic",
    factory: TemplateAtomic,
  })(
    typia.llm.application<
      TemplateAtomicApplication,
      "chatgpt",
      { equal: true }
    >(),
  );

interface TemplateAtomicApplication {
  insert(p: { first: TemplateAtomic }): Promise<void>;
  reduce(p: {
    first: TemplateAtomic;
    second: TemplateAtomic | null;
  }): Promise<TemplateAtomic>;
  coalesce(p: {
    first: TemplateAtomic | null;
    second: TemplateAtomic | null;
    third?: TemplateAtomic | null;
  }): Promise<TemplateAtomic | null>;
}
