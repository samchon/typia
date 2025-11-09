import typia from "typia";

import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";
import { TypeTagAtomicUnion } from "../../../structures/TypeTagAtomicUnion";

export const test_llm_parameters_gemini_TypeTagAtomicUnion = (): void =>
  _test_llm_parameters({
    model: "gemini",
    name: "TypeTagAtomicUnion",
  })(typia.llm.parameters<TypeTagAtomicUnionParameters, "gemini">());

interface TypeTagAtomicUnionParameters {
  regular: TypeTagAtomicUnion;
  nullable: TypeTagAtomicUnion | null;
  optional: TypeTagAtomicUnion | undefined;
  faint: TypeTagAtomicUnion | null | undefined;
  array: Array<TypeTagAtomicUnion>;
}
