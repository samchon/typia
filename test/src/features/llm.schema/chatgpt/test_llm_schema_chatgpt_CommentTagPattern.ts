import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { CommentTagPattern } from "../../../structures/CommentTagPattern";

export const test_llm_schema_chatgpt_CommentTagPattern = (): void =>
  _test_llm_schema({
    model: "chatgpt",
    name: "CommentTagPattern",
  })(typia.llm.schema<CommentTagPattern, "chatgpt">({}));
