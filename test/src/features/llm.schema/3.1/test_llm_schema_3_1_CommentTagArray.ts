import typia from "typia";
import { CommentTagArray } from "../../../structures/CommentTagArray";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_3_1_CommentTagArray = (): void =>
  _test_llm_schema({
    model: "3.1",
    name: "CommentTagArray",
  })(typia.llm.schema<CommentTagArray, "3.1">({}));