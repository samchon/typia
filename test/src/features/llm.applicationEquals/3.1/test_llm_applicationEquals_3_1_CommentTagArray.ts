import typia from "typia";
import { CommentTagArray } from "../../../structures/CommentTagArray";
import { _test_llm_applicationEquals } from "../../../internal/_test_llm_applicationEquals";

export const test_llm_applicationEquals_3_1_CommentTagArray = (): void =>
  _test_llm_applicationEquals({
    model: "3.1",
    name: "CommentTagArray",
    factory: CommentTagArray
  })(
    typia.llm.application<CommentTagArrayApplication, "3.1", { equals: true }>(),
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