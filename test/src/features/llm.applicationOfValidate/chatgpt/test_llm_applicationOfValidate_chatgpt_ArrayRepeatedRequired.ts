import typia from "typia";

import { _test_llm_applicationOfValidate } from "../../../internal/_test_llm_applicationOfValidate";
import { ArrayRepeatedRequired } from "../../../structures/ArrayRepeatedRequired";

export const test_llm_applicationOfValidate_chatgpt_ArrayRepeatedRequired =
  _test_llm_applicationOfValidate({
    model: "chatgpt",
    name: "ArrayRepeatedRequired",
    factory: ArrayRepeatedRequired,
  })(
    typia.llm.applicationOfValidate<
      ArrayRepeatedRequiredApplication,
      "chatgpt"
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
