import typia from "typia";
import { CommentTagArray } from "../../../structures/CommentTagArray";
import { _test_llm_application } from "../../../internal/_test_llm_application";

export const test_llm_application_3_0_CommentTagArray = (): void =>
  _test_llm_application({
    model: "3.0",
    name: "CommentTagArray",
    factory: CommentTagArray
  })(
    typia.llm.application<CommentTagArrayApplication, "3.0">(),
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