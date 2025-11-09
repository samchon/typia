import typia from "typia";
import { ArrayUnion } from "../../../structures/ArrayUnion";
import { _test_llm_application } from "../../../internal/_test_llm_application";

export const test_llm_application_3_0_ArrayUnion = (): void =>
  _test_llm_application({
    model: "3.0",
    name: "ArrayUnion",
    factory: ArrayUnion
  })(
    typia.llm.application<ArrayUnionApplication, "3.0">(),
  );

interface ArrayUnionApplication {
  insert(p: { first: ArrayUnion }): Promise<void>;
  reduce(p: { first: ArrayUnion, second: ArrayUnion | null }): Promise<ArrayUnion>;
  coalesce(p: {
    first: ArrayUnion | null,
    second: ArrayUnion | null,
    third?: ArrayUnion | null,
  }): Promise<ArrayUnion | null>;
}