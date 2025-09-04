import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { CommentTagFormat } from "../../../structures/CommentTagFormat";

export const test_llm_schema_chatgpt_CommentTagFormat = (): void =>
  _test_llm_schema({
    model: "chatgpt",
    name: "CommentTagFormat",
  })(typia.llm.schema<CommentTagFormat, "chatgpt">({}));
