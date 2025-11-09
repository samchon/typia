import typia from "typia";
import { TypeTagObjectUnion } from "../../../structures/TypeTagObjectUnion";
import { _test_llm_application } from "../../../internal/_test_llm_application";

export const test_llm_application_3_0_TypeTagObjectUnion = (): void =>
  _test_llm_application({
    model: "3.0",
    name: "TypeTagObjectUnion",
    factory: TypeTagObjectUnion
  })(
    typia.llm.application<TypeTagObjectUnionApplication, "3.0">(),
  );

interface TypeTagObjectUnionApplication {
  insert(p: { first: TypeTagObjectUnion }): Promise<void>;
  reduce(p: { first: TypeTagObjectUnion, second: TypeTagObjectUnion | null }): Promise<TypeTagObjectUnion>;
  coalesce(p: {
    first: TypeTagObjectUnion | null,
    second: TypeTagObjectUnion | null,
    third?: TypeTagObjectUnion | null,
  }): Promise<TypeTagObjectUnion | null>;
}