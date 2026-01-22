import typia from "typia";

import { _test_llm_parameters } from "../../internal/_test_llm_parameters";
import { ArrayUnion } from "../../structures/ArrayUnion";

export const test_llm_parameters_ArrayUnion = (): void =>
  _test_llm_parameters("ArrayUnion")(
    typia.llm.parameters<ArrayUnionParameters>(),
  );

interface ArrayUnionParameters {
  regular: ArrayUnion;
  nullable: ArrayUnion | null;
  optional: ArrayUnion | undefined;
  faint: ArrayUnion | null | undefined;
  array: Array<ArrayUnion>;
}
