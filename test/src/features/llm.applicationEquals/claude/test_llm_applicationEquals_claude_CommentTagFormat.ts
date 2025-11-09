import typia from "typia";
import { CommentTagFormat } from "../../../structures/CommentTagFormat";
import { _test_llm_applicationEquals } from "../../../internal/_test_llm_applicationEquals";

export const test_llm_applicationEquals_claude_CommentTagFormat = (): void =>
  _test_llm_applicationEquals({
    model: "claude",
    name: "CommentTagFormat",
    factory: CommentTagFormat
  })(
    typia.llm.application<CommentTagFormatApplication, "claude", { equals: true }>(),
  );

interface CommentTagFormatApplication {
  insert(p: { first: CommentTagFormat }): Promise<void>;
  reduce(p: { first: CommentTagFormat, second: CommentTagFormat | null }): Promise<CommentTagFormat>;
  coalesce(p: {
    first: CommentTagFormat | null,
    second: CommentTagFormat | null,
    third?: CommentTagFormat | null,
  }): Promise<CommentTagFormat | null>;
}