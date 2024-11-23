import typia from "typia";

import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";
import { TypeTagObjectUnion } from "../../../structures/TypeTagObjectUnion";

export const test_llm_parameters_3_0_TypeTagObjectUnion = _test_llm_parameters({
  model: "3.0",
  name: "TypeTagObjectUnion",
})(typia.llm.parameters<TypeTagObjectUnionParameters, "3.0">());

interface TypeTagObjectUnionParameters {
  regular: TypeTagObjectUnion;
  nullable: TypeTagObjectUnion | null;
  optional: TypeTagObjectUnion | undefined;
  faint: TypeTagObjectUnion | null | undefined;
  array: Array<TypeTagObjectUnion>;
}
