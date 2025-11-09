import typia from "typia";
import { ArrayRepeatedUnion } from "../../../structures/ArrayRepeatedUnion";
import { _test_llm_application } from "../../../internal/_test_llm_application";

export const test_llm_application_3_1_ArrayRepeatedUnion = (): void =>
  _test_llm_application({
    model: "3.1",
    name: "ArrayRepeatedUnion",
    factory: ArrayRepeatedUnion
  })(
    typia.llm.application<ArrayRepeatedUnionApplication, "3.1">(),
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