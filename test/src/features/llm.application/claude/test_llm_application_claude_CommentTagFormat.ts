import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { CommentTagFormat } from "../../../structures/CommentTagFormat";

export const test_llm_application_claude_CommentTagFormat =
  _test_llm_application({
    model: "claude",
    name: "CommentTagFormat",
  })(typia.llm.application<CommentTagFormatApplication, "claude">());

interface CommentTagFormatApplication {
  insert(p: { first: CommentTagFormat }): Promise<void>;
  reduce(p: {
    first: CommentTagFormat;
    second: CommentTagFormat | null;
  }): Promise<CommentTagFormat>;
  coalesce(p: {
    first: CommentTagFormat | null;
    second: CommentTagFormat | null;
    third?: CommentTagFormat | null;
  }): Promise<CommentTagFormat | null>;
}
