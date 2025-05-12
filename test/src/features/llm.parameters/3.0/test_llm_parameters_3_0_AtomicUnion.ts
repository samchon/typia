import typia from "typia";

import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";
import { AtomicUnion } from "../../../structures/AtomicUnion";

export const test_llm_parameters_3_0_AtomicUnion = _test_llm_parameters({
  model: "3.0",
  name: "AtomicUnion",
})(typia.llm.parameters<AtomicUnionParameters, "3.0">());

interface AtomicUnionParameters {
  regular: AtomicUnion;
  nullable: AtomicUnion | null;
  optional: AtomicUnion | undefined;
  faint: AtomicUnion | null | undefined;
  array: Array<AtomicUnion>;
}
