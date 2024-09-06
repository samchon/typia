import typia from "typia";

import { _test_llm_schema } from "../../internal/_test_llm_schema";
import { CommentTagLength } from "../../structures/CommentTagLength";

export const test_llm_schema_CommentTagLength = _test_llm_schema(
  "CommentTagLength",
)(typia.llm.schema<CommentTagLength>());
