import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { CommentTagType } from "../../../structures/CommentTagType";

export const test_llm_schema_chatgpt_CommentTagType = _test_llm_schema({
  model: "chatgpt",
  name: "CommentTagType",
})(typia.llm.schema<CommentTagType, "chatgpt">({}));
