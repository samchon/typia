import typia from "typia";

import { _test_llm_applicationEquals } from "../../../internal/_test_llm_applicationEquals";
import { ArrayRepeatedUnion } from "../../../structures/ArrayRepeatedUnion";

export const test_llm_applicationEquals_llama_ArrayRepeatedUnion = (): void =>
  _test_llm_applicationEquals({
    model: "llama",
    name: "ArrayRepeatedUnion",
    factory: ArrayRepeatedUnion,
  })(
    typia.llm.application<
      ArrayRepeatedUnionApplication,
      "llama",
      { equals: true }
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
