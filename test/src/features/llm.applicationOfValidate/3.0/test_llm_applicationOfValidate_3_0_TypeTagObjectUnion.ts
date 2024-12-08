import typia from "typia";

import { _test_llm_applicationOfValidate } from "../../../internal/_test_llm_applicationOfValidate";
import { TypeTagObjectUnion } from "../../../structures/TypeTagObjectUnion";

export const test_llm_applicationOfValidate_3_0_TypeTagObjectUnion =
  _test_llm_applicationOfValidate({
    model: "3.0",
    name: "TypeTagObjectUnion",
    factory: TypeTagObjectUnion,
  })(typia.llm.applicationOfValidate<TypeTagObjectUnionApplication, "3.0">());

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
