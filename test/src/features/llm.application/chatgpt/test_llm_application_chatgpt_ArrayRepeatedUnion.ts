import typia from "typia";
import { ArrayRepeatedUnion } from "../../../structures/ArrayRepeatedUnion";
import { _test_llm_application } from "../../../internal/_test_llm_application";

export const test_llm_application_chatgpt_ArrayRepeatedUnion = (): void =>
  _test_llm_application({
    model: "chatgpt",
    name: "ArrayRepeatedUnion",
    factory: ArrayRepeatedUnion
  })(
    typia.llm.application<ArrayRepeatedUnionApplication, "chatgpt">(),
  );

interface ArrayRepeatedUnionApplication {
  insert(p: { first: ArrayRepeatedUnion }): Promise<void>;
  reduce(p: { first: ArrayRepeatedUnion, second: ArrayRepeatedUnion | null }): Promise<ArrayRepeatedUnion>;
  coalesce(p: {
    first: ArrayRepeatedUnion | null,
    second: ArrayRepeatedUnion | null,
    third?: ArrayRepeatedUnion | null,
  }): Promise<ArrayRepeatedUnion | null>;
}