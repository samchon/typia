import typia from "typia";
import { ArrayAny } from "../../../structures/ArrayAny";
import { _test_llm_application } from "../../../internal/_test_llm_application";

export const test_llm_application_chatgpt_ArrayAny = (): void =>
  _test_llm_application({
    model: "chatgpt",
    name: "ArrayAny",
    factory: ArrayAny
  })(
    typia.llm.application<ArrayAnyApplication, "chatgpt">(),
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