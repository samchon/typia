import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { CommentTagObjectUnion } from "../../../structures/CommentTagObjectUnion";

export const test_llm_schema_3_0_CommentTagObjectUnion = _test_llm_schema({
  model: "3.0",
  name: "CommentTagObjectUnion",
})(typia.llm.schema<CommentTagObjectUnion, "3.0">());
