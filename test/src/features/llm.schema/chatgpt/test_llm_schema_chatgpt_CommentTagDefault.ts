import typia from "typia";
import { CommentTagDefault } from "../../../structures/CommentTagDefault";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_chatgpt_CommentTagDefault = 
  _test_llm_schema({
    model: "chatgpt",
    name: "CommentTagDefault",
  })(typia.llm.schema<CommentTagDefault, "chatgpt">());