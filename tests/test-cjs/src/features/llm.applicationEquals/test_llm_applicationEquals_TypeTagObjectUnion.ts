import typia from "typia";

import { _test_llm_applicationEquals } from "../../internal/_test_llm_applicationEquals";
import { TypeTagObjectUnion } from "../../structures/TypeTagObjectUnion";

export const test_llm_applicationEquals_TypeTagObjectUnion = (): void =>
  _test_llm_applicationEquals({
    name: "TypeTagObjectUnion",
    factory: TypeTagObjectUnion,
  })(typia.llm.application<TypeTagObjectUnionApplication, { equals: true }>());

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
