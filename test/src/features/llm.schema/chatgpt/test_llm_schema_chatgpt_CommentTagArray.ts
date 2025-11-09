import typia from "typia";
import { CommentTagArray } from "../../../structures/CommentTagArray";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_chatgpt_CommentTagArray = (): void =>
  _test_llm_schema({
    model: "chatgpt",
    name: "CommentTagArray",
  })(typia.llm.schema<CommentTagArray, "chatgpt">({}));