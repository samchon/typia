import typia from "typia";
import { CommentTagRange } from "../../../structures/CommentTagRange";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_chatgpt_CommentTagRange = (): void =>
  _test_llm_schema({
    model: "chatgpt",
    name: "CommentTagRange",
  })(typia.llm.schema<CommentTagRange, "chatgpt">({}));