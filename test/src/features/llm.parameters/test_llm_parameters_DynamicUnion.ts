import typia from "typia";

import { _test_llm_parameters } from "../../internal/_test_llm_parameters";
import { DynamicUnion } from "../../structures/DynamicUnion";

export const test_llm_parameters_DynamicUnion = (): void =>
  _test_llm_parameters("DynamicUnion")(
    typia.llm.parameters<DynamicUnionParameters>(),
  );

interface DynamicUnionParameters {
  regular: DynamicUnion;
  nullable: DynamicUnion | null;
  optional: DynamicUnion | undefined;
  faint: DynamicUnion | null | undefined;
  array: Array<DynamicUnion>;
}
