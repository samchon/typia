import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { ArrayRepeatedNullable } from "../../../structures/ArrayRepeatedNullable";

export const test_llm_application_claude_ArrayRepeatedNullable = (): void =>
  _test_llm_application({
    model: "claude",
    name: "ArrayRepeatedNullable",
    factory: ArrayRepeatedNullable,
  })(typia.llm.application<ArrayRepeatedNullableApplication, "claude">());

interface ArrayRepeatedNullableApplication {
  insert(p: { first: ArrayRepeatedNullable }): Promise<void>;
  reduce(p: {
    first: ArrayRepeatedNullable;
    second: ArrayRepeatedNullable | null;
  }): Promise<ArrayRepeatedNullable>;
  coalesce(p: {
    first: ArrayRepeatedNullable | null;
    second: ArrayRepeatedNullable | null;
    third?: ArrayRepeatedNullable | null;
  }): Promise<ArrayRepeatedNullable | null>;
}
