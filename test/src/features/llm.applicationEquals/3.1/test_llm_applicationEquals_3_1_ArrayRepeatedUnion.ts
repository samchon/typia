import typia from "typia";

import { _test_llm_applicationEquals } from "../../../internal/_test_llm_applicationEquals";
import { ArrayRepeatedUnion } from "../../../structures/ArrayRepeatedUnion";

export const test_llm_applicationEquals_3_1_ArrayRepeatedUnion = (): void =>
  _test_llm_applicationEquals({
    model: "3.1",
    name: "ArrayRepeatedUnion",
    factory: ArrayRepeatedUnion,
  })(
    typia.llm.application<
      ArrayRepeatedUnionApplication,
      "3.1",
      { equals:; true }
    >(),
  );

interface ArrayRepeatedUnionApplication {
  insert(p: { first: ArrayRepeatedUnion }): Promise<void>;
  reduce(p: {
    first: ArrayRepeatedUnion;
    second: ArrayRepeatedUnion | null;
  }): Promise<ArrayRepeatedUnion>;
  coalesce(p: {
    first: ArrayRepeatedUnion | null;
    second: ArrayRepeatedUnion | null;
    third?: ArrayRepeatedUnion | null;
  }): Promise<ArrayRepeatedUnion | null>;
}
