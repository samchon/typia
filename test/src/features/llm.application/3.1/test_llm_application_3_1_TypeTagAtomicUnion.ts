import typia from "typia";
import { TypeTagAtomicUnion } from "../../../structures/TypeTagAtomicUnion";
import { _test_llm_application } from "../../../internal/_test_llm_application";

export const test_llm_application_3_1_TypeTagAtomicUnion = (): void =>
  _test_llm_application({
    model: "3.1",
    name: "TypeTagAtomicUnion",
    factory: TypeTagAtomicUnion
  })(
    typia.llm.application<TypeTagAtomicUnionApplication, "3.1">(),
  );

interface TypeTagAtomicUnionApplication {
  insert(p: { first: TypeTagAtomicUnion }): Promise<void>;
  reduce(p: { first: TypeTagAtomicUnion, second: TypeTagAtomicUnion | null }): Promise<TypeTagAtomicUnion>;
  coalesce(p: {
    first: TypeTagAtomicUnion | null,
    second: TypeTagAtomicUnion | null,
    third?: TypeTagAtomicUnion | null,
  }): Promise<TypeTagAtomicUnion | null>;
}