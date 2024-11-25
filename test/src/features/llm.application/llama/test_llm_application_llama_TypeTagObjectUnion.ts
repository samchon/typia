import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { TypeTagObjectUnion } from "../../../structures/TypeTagObjectUnion";

export const test_llm_application_llama_TypeTagObjectUnion =
  _test_llm_application({
    model: "llama",
    name: "TypeTagObjectUnion",
  })(typia.llm.application<TypeTagObjectUnionApplication, "llama">());

interface TypeTagObjectUnionApplication {
  insert(first: TypeTagObjectUnion): Promise<void>;
  reduce(
    first: TypeTagObjectUnion,
    second: TypeTagObjectUnion | null,
  ): Promise<TypeTagObjectUnion>;
  coalesce(
    first: TypeTagObjectUnion | null,
    second: TypeTagObjectUnion | null,
    third?: TypeTagObjectUnion | null,
  ): Promise<TypeTagObjectUnion | null>;
}
