import typia from "typia";

import { _test_llm_applicationEquals } from "../../../internal/_test_llm_applicationEquals";
import { ArrayRepeatedRequired } from "../../../structures/ArrayRepeatedRequired";

export const test_llm_applicationEquals_3_0_ArrayRepeatedRequired = (): void =>
  _test_llm_applicationEquals({
    model: "3.0",
    name: "ArrayRepeatedRequired",
    factory: ArrayRepeatedRequired,
  })(
    typia.llm.application<
      ArrayRepeatedRequiredApplication,
      "3.0",
      { equals: true }
    >(),
  );

interface ArrayRepeatedRequiredApplication {
  insert(p: { first: ArrayRepeatedRequired }): Promise<void>;
  reduce(p: {
    first: ArrayRepeatedRequired;
    second: ArrayRepeatedRequired | null;
  }): Promise<ArrayRepeatedRequired>;
  coalesce(p: {
    first: ArrayRepeatedRequired | null;
    second: ArrayRepeatedRequired | null;
    third?: ArrayRepeatedRequired | null;
  }): Promise<ArrayRepeatedRequired | null>;
}
