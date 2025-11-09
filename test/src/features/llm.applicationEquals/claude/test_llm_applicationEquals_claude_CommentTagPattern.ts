import typia from "typia";
import { CommentTagPattern } from "../../../structures/CommentTagPattern";
import { _test_llm_applicationEquals } from "../../../internal/_test_llm_applicationEquals";

export const test_llm_applicationEquals_claude_CommentTagPattern = (): void =>
  _test_llm_applicationEquals({
    model: "claude",
    name: "CommentTagPattern",
    factory: CommentTagPattern
  })(
    typia.llm.application<CommentTagPatternApplication, "claude", { equals: true }>(),
  );

interface CommentTagPatternApplication {
  insert(p: { first: CommentTagPattern }): Promise<void>;
  reduce(p: { first: CommentTagPattern, second: CommentTagPattern | null }): Promise<CommentTagPattern>;
  coalesce(p: {
    first: CommentTagPattern | null,
    second: CommentTagPattern | null,
    third?: CommentTagPattern | null,
  }): Promise<CommentTagPattern | null>;
}