import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { CommentTagPattern } from "../../../structures/CommentTagPattern";

export const test_llm_schema_llama_CommentTagPattern = _test_llm_schema({
  model: "llama",
  name: "CommentTagPattern",
})(typia.llm.schema<CommentTagPattern, "llama">({}));
