import typia from "typia";
import { ArrayAny } from "../../../structures/ArrayAny";
import { _test_llm_application } from "../../../internal/_test_llm_application";

export const test_llm_application_claude_ArrayAny = (): void =>
  _test_llm_application({
    model: "claude",
    name: "ArrayAny",
    factory: ArrayAny
  })(
    typia.llm.application<ArrayAnyApplication, "claude">(),
  );

interface ArrayAnyApplication {
  insert(p: { first: ArrayAny }): Promise<void>;
  reduce(p: { first: ArrayAny, second: ArrayAny | null }): Promise<ArrayAny>;
  coalesce(p: {
    first: ArrayAny | null,
    second: ArrayAny | null,
    third?: ArrayAny | null,
  }): Promise<ArrayAny | null>;
}