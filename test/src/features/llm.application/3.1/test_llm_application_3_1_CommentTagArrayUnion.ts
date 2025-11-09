import typia from "typia";
import { CommentTagArrayUnion } from "../../../structures/CommentTagArrayUnion";
import { _test_llm_application } from "../../../internal/_test_llm_application";

export const test_llm_application_3_1_CommentTagArrayUnion = (): void =>
  _test_llm_application({
    model: "3.1",
    name: "CommentTagArrayUnion",
    factory: CommentTagArrayUnion
  })(
    typia.llm.application<CommentTagArrayUnionApplication, "3.1">(),
  );

interface CommentTagArrayUnionApplication {
  insert(p: { first: CommentTagArrayUnion }): Promise<void>;
  reduce(p: { first: CommentTagArrayUnion, second: CommentTagArrayUnion | null }): Promise<CommentTagArrayUnion>;
  coalesce(p: {
    first: CommentTagArrayUnion | null,
    second: CommentTagArrayUnion | null,
    third?: CommentTagArrayUnion | null,
  }): Promise<CommentTagArrayUnion | null>;
}