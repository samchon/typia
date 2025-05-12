import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { CommentTagAtomicUnion } from "../../../structures/CommentTagAtomicUnion";

export const test_llm_schema_3_0_CommentTagAtomicUnion = _test_llm_schema({
  model: "3.0",
  name: "CommentTagAtomicUnion",
})(typia.llm.schema<CommentTagAtomicUnion, "3.0">());
