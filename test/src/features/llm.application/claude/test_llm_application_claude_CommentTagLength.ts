import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { CommentTagLength } from "../../../structures/CommentTagLength";

export const test_llm_application_claude_CommentTagLength =
  _test_llm_application({
    model: "claude",
    name: "CommentTagLength",
  })(typia.llm.application<CommentTagLengthApplication, "claude">());

interface CommentTagLengthApplication {
  insert(first: CommentTagLength): Promise<void>;
  reduce(
    first: CommentTagLength,
    second: CommentTagLength | null,
  ): Promise<CommentTagLength>;
  coalesce(
    first: CommentTagLength | null,
    second: CommentTagLength | null,
    third?: CommentTagLength | null,
  ): Promise<CommentTagLength | null>;
}
