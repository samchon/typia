import typia from "typia";

import { _test_llm_applicationEquals } from "../../../internal/_test_llm_applicationEquals";
import { DynamicNever } from "../../../structures/DynamicNever";

export const test_llm_applicationEquals_chatgpt_DynamicNever = (): void =>
  _test_llm_applicationEquals({
    model: "chatgpt",
    name: "DynamicNever",
    factory: DynamicNever,
  })(
    typia.llm.application<
      DynamicNeverApplication,
      "chatgpt",
      { equals: true }
    >(),
  );

interface DynamicNeverApplication {
  insert(p: { first: DynamicNever }): Promise<void>;
  reduce(p: {
    first: DynamicNever;
    second: DynamicNever | null;
  }): Promise<DynamicNever>;
  coalesce(p: {
    first: DynamicNever | null;
    second: DynamicNever | null;
    third?: DynamicNever | null;
  }): Promise<DynamicNever | null>;
}
