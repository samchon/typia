import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { DynamicComposite } from "../../../structures/DynamicComposite";

export const test_llm_application_3_0_DynamicComposite = (): void =>
  _test_llm_application({
    model: "3.0",
    name: "DynamicComposite",
    factory: DynamicComposite,
  })(typia.llm.application<DynamicCompositeApplication, "3.0">());

interface DynamicCompositeApplication {
  insert(p: { first: DynamicComposite }): Promise<void>;
  reduce(p: {
    first: DynamicComposite;
    second: DynamicComposite | null;
  }): Promise<DynamicComposite>;
  coalesce(p: {
    first: DynamicComposite | null;
    second: DynamicComposite | null;
    third?: DynamicComposite | null;
  }): Promise<DynamicComposite | null>;
}
