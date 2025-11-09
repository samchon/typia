import typia from "typia";
import { ArrayRepeatedNullable } from "../../../structures/ArrayRepeatedNullable";
import { _test_llm_applicationEquals } from "../../../internal/_test_llm_applicationEquals";

export const test_llm_applicationEquals_claude_ArrayRepeatedNullable = (): void =>
  _test_llm_applicationEquals({
    model: "claude",
    name: "ArrayRepeatedNullable",
    factory: ArrayRepeatedNullable
  })(
    typia.llm.application<ArrayRepeatedNullableApplication, "claude", { equals: true }>(),
  );

interface ArrayRepeatedNullableApplication {
  insert(p: { first: ArrayRepeatedNullable }): Promise<void>;
  reduce(p: { first: ArrayRepeatedNullable, second: ArrayRepeatedNullable | null }): Promise<ArrayRepeatedNullable>;
  coalesce(p: {
    first: ArrayRepeatedNullable | null,
    second: ArrayRepeatedNullable | null,
    third?: ArrayRepeatedNullable | null,
  }): Promise<ArrayRepeatedNullable | null>;
}