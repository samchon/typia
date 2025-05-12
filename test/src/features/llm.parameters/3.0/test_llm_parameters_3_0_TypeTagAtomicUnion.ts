import typia from "typia";

import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";
import { TypeTagAtomicUnion } from "../../../structures/TypeTagAtomicUnion";

export const test_llm_parameters_3_0_TypeTagAtomicUnion = _test_llm_parameters({
  model: "3.0",
  name: "TypeTagAtomicUnion",
})(typia.llm.parameters<TypeTagAtomicUnionParameters, "3.0">());

interface TypeTagAtomicUnionParameters {
  regular: TypeTagAtomicUnion;
  nullable: TypeTagAtomicUnion | null;
  optional: TypeTagAtomicUnion | undefined;
  faint: TypeTagAtomicUnion | null | undefined;
  array: Array<TypeTagAtomicUnion>;
}
