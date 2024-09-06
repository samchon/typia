import typia from "typia";

import { _test_llm_schema } from "../../internal/_test_llm_schema";
import { CommentTagObjectUnion } from "../../structures/CommentTagObjectUnion";

export const test_llm_schema_CommentTagObjectUnion = _test_llm_schema(
  "CommentTagObjectUnion",
)(typia.llm.schema<CommentTagObjectUnion>());
