import typia from "typia";

import { _test_llm_applicationEquals } from "../../../internal/_test_llm_applicationEquals";
import { ArrayRepeatedRequired } from "../../../structures/ArrayRepeatedRequired";

export const test_llm_application_chatgpt_ArrayRepeatedRequired =
  _test_llm_applicationEquals({
    model: "chatgpt",
    name: "ArrayRepeatedRequired",
    factory: ArrayRepeatedRequired,
  })(
    typia.llm.application<
      ArrayRepeatedRequiredApplication,
      "chatgpt",
      { equal: true }
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
