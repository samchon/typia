import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { TypeTagObjectUnion } from "../../../structures/TypeTagObjectUnion";

export const test_llm_application_claude_TypeTagObjectUnion =
  _test_llm_application({
    model: "claude",
    name: "TypeTagObjectUnion",
  })(typia.llm.application<TypeTagObjectUnionApplication, "claude">());

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
