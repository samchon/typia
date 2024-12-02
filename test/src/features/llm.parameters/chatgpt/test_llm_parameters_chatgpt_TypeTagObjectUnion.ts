import typia from "typia";

import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";
import { TypeTagObjectUnion } from "../../../structures/TypeTagObjectUnion";

export const test_llm_parameters_chatgpt_TypeTagObjectUnion =
  _test_llm_parameters({
    model: "chatgpt",
    name: "TypeTagObjectUnion",
  })(typia.llm.parameters<TypeTagObjectUnionParameters, "chatgpt">());

interface TypeTagObjectUnionParameters {
  regular: TypeTagObjectUnion;
  nullable: TypeTagObjectUnion | null;
  optional: TypeTagObjectUnion | undefined;
  faint: TypeTagObjectUnion | null | undefined;
  array: Array<TypeTagObjectUnion>;
}
