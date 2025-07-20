import typia from "typia";

import { _test_llm_applicationEquals } from "../../../internal/_test_llm_applicationEquals";
import { DynamicComposite } from "../../../structures/DynamicComposite";

export const test_llm_applicationEquals_chatgpt_DynamicComposite = (): void =>
  _test_llm_applicationEquals({
    model: "chatgpt",
    name: "DynamicComposite",
    factory: DynamicComposite,
  })(
    typia.llm.application<
      DynamicCompositeApplication,
      "chatgpt",
      { equals:; true }
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
