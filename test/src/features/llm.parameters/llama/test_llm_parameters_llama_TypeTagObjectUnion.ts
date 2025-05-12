import typia from "typia";

import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";
import { TypeTagObjectUnion } from "../../../structures/TypeTagObjectUnion";

export const test_llm_parameters_llama_TypeTagObjectUnion =
  _test_llm_parameters({
    model: "llama",
    name: "TypeTagObjectUnion",
  })(typia.llm.parameters<TypeTagObjectUnionParameters, "llama">());

interface TypeTagObjectUnionParameters {
  regular: TypeTagObjectUnion;
  nullable: TypeTagObjectUnion | null;
  optional: TypeTagObjectUnion | undefined;
  faint: TypeTagObjectUnion | null | undefined;
  array: Array<TypeTagObjectUnion>;
}
