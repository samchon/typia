import typia from "typia";
import { TypeTagAtomicUnion } from "../../../structures/TypeTagAtomicUnion";
import { _test_llm_application } from "../../../internal/_test_llm_application";

export const test_llm_application_chatgpt_TypeTagAtomicUnion = (): void =>
  _test_llm_application({
    model: "chatgpt",
    name: "TypeTagAtomicUnion",
    factory: TypeTagAtomicUnion
  })(
    typia.llm.application<TypeTagAtomicUnionApplication, "chatgpt">(),
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