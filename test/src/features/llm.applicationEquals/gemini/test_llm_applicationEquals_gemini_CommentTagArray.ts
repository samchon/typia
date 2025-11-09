import typia from "typia";
import { CommentTagArray } from "../../../structures/CommentTagArray";
import { _test_llm_applicationEquals } from "../../../internal/_test_llm_applicationEquals";

export const test_llm_applicationEquals_gemini_CommentTagArray = (): void =>
  _test_llm_applicationEquals({
    model: "gemini",
    name: "CommentTagArray",
    factory: CommentTagArray
  })(
    typia.llm.application<CommentTagArrayApplication, "gemini", { equals: true }>(),
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