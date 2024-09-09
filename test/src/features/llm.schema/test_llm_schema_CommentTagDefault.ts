import typia from "typia";

import { _test_llm_schema } from "../../internal/_test_llm_schema";
import { CommentTagDefault } from "../../structures/CommentTagDefault";

export const test_llm_schema_CommentTagDefault = _test_llm_schema(
  "CommentTagDefault",
)(typia.llm.schema<CommentTagDefault>());
