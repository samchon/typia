import typia from "typia";
import { CommentTagLength } from "../../../structures/CommentTagLength";
import { _test_llm_applicationEquals } from "../../../internal/_test_llm_applicationEquals";

export const test_llm_applicationEquals_claude_CommentTagLength = (): void =>
  _test_llm_applicationEquals({
    model: "claude",
    name: "CommentTagLength",
    factory: CommentTagLength
  })(
    typia.llm.application<CommentTagLengthApplication, "claude", { equals: true }>(),
  );

interface CommentTagLengthApplication {
  insert(p: { first: CommentTagLength }): Promise<void>;
  reduce(p: { first: CommentTagLength, second: CommentTagLength | null }): Promise<CommentTagLength>;
  coalesce(p: {
    first: CommentTagLength | null,
    second: CommentTagLength | null,
    third?: CommentTagLength | null,
  }): Promise<CommentTagLength | null>;
}