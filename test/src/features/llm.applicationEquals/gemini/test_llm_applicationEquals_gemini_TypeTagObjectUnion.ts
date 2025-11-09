import typia from "typia";
import { TypeTagObjectUnion } from "../../../structures/TypeTagObjectUnion";
import { _test_llm_applicationEquals } from "../../../internal/_test_llm_applicationEquals";

export const test_llm_applicationEquals_gemini_TypeTagObjectUnion = (): void =>
  _test_llm_applicationEquals({
    model: "gemini",
    name: "TypeTagObjectUnion",
    factory: TypeTagObjectUnion
  })(
    typia.llm.application<TypeTagObjectUnionApplication, "gemini", { equals: true }>(),
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