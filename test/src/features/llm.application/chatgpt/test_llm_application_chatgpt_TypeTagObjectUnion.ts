import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { TypeTagObjectUnion } from "../../../structures/TypeTagObjectUnion";

export const test_llm_application_chatgpt_TypeTagObjectUnion = (): void =>
  _test_llm_application({
    model: "chatgpt",
    name: "TypeTagObjectUnion",
    factory: TypeTagObjectUnion,
  })(typia.llm.application<TypeTagObjectUnionApplication, "chatgpt">());

interface TypeTagObjectUnionApplication {
  insert(p: { first: TypeTagObjectUnion }): Promise<void>;
  reduce(p: {
    first: TypeTagObjectUnion;
    second: TypeTagObjectUnion | null;
  }): Promise<TypeTagObjectUnion>;
  coalesce(p: {
    first: TypeTagObjectUnion | null;
    second: TypeTagObjectUnion | null;
    third?: TypeTagObjectUnion | null;
  }): Promise<TypeTagObjectUnion | null>;
}
