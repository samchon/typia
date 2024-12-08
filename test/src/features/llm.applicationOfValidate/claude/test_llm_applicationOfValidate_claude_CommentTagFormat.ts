import typia from "typia";

import { _test_llm_applicationOfValidate } from "../../../internal/_test_llm_applicationOfValidate";
import { CommentTagFormat } from "../../../structures/CommentTagFormat";

export const test_llm_applicationOfValidate_claude_CommentTagFormat =
  _test_llm_applicationOfValidate({
    model: "claude",
    name: "CommentTagFormat",
    factory: CommentTagFormat,
  })(typia.llm.applicationOfValidate<CommentTagFormatApplication, "claude">());

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
