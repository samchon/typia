import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { CommentTagDefault } from "../../../structures/CommentTagDefault";

export const test_llm_schema_3_1_CommentTagDefault = _test_llm_schema({
  model: "3.1",
  name: "CommentTagDefault",
})(typia.llm.schema<CommentTagDefault, "3.1">());
