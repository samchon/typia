import typia from "typia";

import { _test_llm_schema } from "../../internal/_test_llm_schema";
import { CommentTagRange } from "../../structures/CommentTagRange";

export const test_llm_schema_CommentTagRange = _test_llm_schema(
  "CommentTagRange",
)(typia.llm.schema<CommentTagRange>());
