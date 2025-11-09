import typia from "typia";
import { TypeTagArrayUnion } from "../../../structures/TypeTagArrayUnion";
import { _test_llm_application } from "../../../internal/_test_llm_application";

export const test_llm_application_gemini_TypeTagArrayUnion = (): void =>
  _test_llm_application({
    model: "gemini",
    name: "TypeTagArrayUnion",
    factory: TypeTagArrayUnion
  })(
    typia.llm.application<TypeTagArrayUnionApplication, "gemini">(),
  );

interface TypeTagArrayUnionApplication {
  insert(p: { first: TypeTagArrayUnion }): Promise<void>;
  reduce(p: { first: TypeTagArrayUnion, second: TypeTagArrayUnion | null }): Promise<TypeTagArrayUnion>;
  coalesce(p: {
    first: TypeTagArrayUnion | null,
    second: TypeTagArrayUnion | null,
    third?: TypeTagArrayUnion | null,
  }): Promise<TypeTagArrayUnion | null>;
}