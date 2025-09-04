import typia from "typia";

import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";
import { ConstantAtomicUnion } from "../../../structures/ConstantAtomicUnion";

export const test_llm_parameters_llama_ConstantAtomicUnion = (): void =>
  _test_llm_parameters({
    model: "llama",
    name: "ConstantAtomicUnion",
  })(typia.llm.parameters<ConstantAtomicUnionParameters, "llama">());

interface ConstantAtomicUnionParameters {
  regular: ConstantAtomicUnion;
  nullable: ConstantAtomicUnion | null;
  optional: ConstantAtomicUnion | undefined;
  faint: ConstantAtomicUnion | null | undefined;
  array: Array<ConstantAtomicUnion>;
}
