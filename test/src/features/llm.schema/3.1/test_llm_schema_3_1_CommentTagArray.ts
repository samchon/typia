import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { CommentTagArray } from "../../../structures/CommentTagArray";

export const test_llm_schema_3_1_CommentTagArray = _test_llm_schema({
  model: "3.1",
  name: "CommentTagArray",
})(typia.llm.schema<CommentTagArray, "3.1">({}));
