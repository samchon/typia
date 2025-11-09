import typia from "typia";
import { TypeTagArrayUnion } from "../../../structures/TypeTagArrayUnion";
import { _test_llm_application } from "../../../internal/_test_llm_application";

export const test_llm_application_claude_TypeTagArrayUnion = (): void =>
  _test_llm_application({
    model: "claude",
    name: "TypeTagArrayUnion",
    factory: TypeTagArrayUnion
  })(
    typia.llm.application<TypeTagArrayUnionApplication, "claude">(),
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