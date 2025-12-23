import typia from "typia";

import { _test_llm_parameters } from "../../internal/_test_llm_parameters";
import { ArrayRepeatedUnion } from "../../structures/ArrayRepeatedUnion";

export const test_llm_parameters_ArrayRepeatedUnion = (): void =>
  _test_llm_parameters("ArrayRepeatedUnion")(
    typia.llm.parameters<ArrayRepeatedUnionParameters>(),
  );

interface ArrayRepeatedUnionParameters {
  regular: ArrayRepeatedUnion;
  nullable: ArrayRepeatedUnion | null;
  optional: ArrayRepeatedUnion | undefined;
  faint: ArrayRepeatedUnion | null | undefined;
  array: Array<ArrayRepeatedUnion>;
}
