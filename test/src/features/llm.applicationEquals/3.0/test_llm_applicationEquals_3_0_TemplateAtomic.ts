import typia from "typia";

import { _test_llm_applicationEquals } from "../../../internal/_test_llm_applicationEquals";
import { TemplateAtomic } from "../../../structures/TemplateAtomic";

export const test_llm_application_3_0_TemplateAtomic =
  _test_llm_applicationEquals({
    model: "3.0",
    name: "TemplateAtomic",
    factory: TemplateAtomic,
  })(
    typia.llm.application<TemplateAtomicApplication, "3.0", { equal: true }>(),
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
