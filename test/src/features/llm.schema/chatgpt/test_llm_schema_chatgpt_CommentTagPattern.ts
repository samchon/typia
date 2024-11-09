import typia from "typia";
import { CommentTagPattern } from "../../../structures/CommentTagPattern";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_chatgpt_CommentTagPattern = 
  _test_llm_schema({
    model: "chatgpt",
    name: "CommentTagPattern",
  })(typia.llm.schema<CommentTagPattern, "chatgpt">());