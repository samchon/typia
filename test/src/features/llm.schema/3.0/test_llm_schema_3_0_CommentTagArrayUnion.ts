import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { CommentTagArrayUnion } from "../../../structures/CommentTagArrayUnion";

export const test_llm_schema_3_0_CommentTagArrayUnion = _test_llm_schema({
  model: "3.0",
  name: "CommentTagArrayUnion",
})(typia.llm.schema<CommentTagArrayUnion, "3.0">());
