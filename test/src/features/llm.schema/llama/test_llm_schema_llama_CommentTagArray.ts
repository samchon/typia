import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { CommentTagArray } from "../../../structures/CommentTagArray";

export const test_llm_schema_llama_CommentTagArray = _test_llm_schema({
  model: "llama",
  name: "CommentTagArray",
})(typia.llm.schema<CommentTagArray, "llama">({}));
