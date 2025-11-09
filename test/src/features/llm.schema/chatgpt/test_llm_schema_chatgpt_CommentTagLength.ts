import typia from "typia";
import { CommentTagLength } from "../../../structures/CommentTagLength";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_chatgpt_CommentTagLength = (): void =>
  _test_llm_schema({
    model: "chatgpt",
    name: "CommentTagLength",
  })(typia.llm.schema<CommentTagLength, "chatgpt">({}));