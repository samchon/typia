import typia from "typia";

import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";
import { DynamicUnion } from "../../../structures/DynamicUnion";

export const test_llm_parameters_3_1_DynamicUnion = _test_llm_parameters({
  model: "3.1",
  name: "DynamicUnion",
})(typia.llm.parameters<DynamicUnionParameters, "3.1">());

interface DynamicUnionParameters {
  regular: DynamicUnion;
  nullable: DynamicUnion | null;
  optional: DynamicUnion | undefined;
  faint: DynamicUnion | null | undefined;
  array: Array<DynamicUnion>;
}
