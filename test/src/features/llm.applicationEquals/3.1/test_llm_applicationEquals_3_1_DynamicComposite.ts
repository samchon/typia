import typia from "typia";

import { _test_llm_applicationEquals } from "../../../internal/_test_llm_applicationEquals";
import { DynamicComposite } from "../../../structures/DynamicComposite";

export const test_llm_application_3_1_DynamicComposite =
  _test_llm_applicationEquals({
    model: "3.1",
    name: "DynamicComposite",
    factory: DynamicComposite,
  })(
    typia.llm.application<
      DynamicCompositeApplication,
      "3.1",
      { equal: true }
    >(),
  );

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
