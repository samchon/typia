import typia from "typia";
import { CommentTagArray } from "../../../structures/CommentTagArray";
import { _test_llm_application } from "../../../internal/_test_llm_application";

export const test_llm_application_claude_CommentTagArray = (): void =>
  _test_llm_application({
    model: "claude",
    name: "CommentTagArray",
    factory: CommentTagArray
  })(
    typia.llm.application<CommentTagArrayApplication, "claude">(),
  );

interface CommentTagArrayApplication {
  insert(p: { first: CommentTagArray }): Promise<void>;
  reduce(p: { first: CommentTagArray, second: CommentTagArray | null }): Promise<CommentTagArray>;
  coalesce(p: {
    first: CommentTagArray | null,
    second: CommentTagArray | null,
    third?: CommentTagArray | null,
  }): Promise<CommentTagArray | null>;
}