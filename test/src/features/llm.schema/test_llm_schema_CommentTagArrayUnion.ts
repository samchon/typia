import typia from "typia";

import { _test_llm_schema } from "../../internal/_test_llm_schema";
import { CommentTagArrayUnion } from "../../structures/CommentTagArrayUnion";

export const test_llm_schema_CommentTagArrayUnion = _test_llm_schema(
  "CommentTagArrayUnion",
)(typia.llm.schema<CommentTagArrayUnion>());
