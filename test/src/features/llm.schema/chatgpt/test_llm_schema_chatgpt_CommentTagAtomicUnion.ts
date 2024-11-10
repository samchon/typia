import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { CommentTagAtomicUnion } from "../../../structures/CommentTagAtomicUnion";

export const test_llm_schema_chatgpt_CommentTagAtomicUnion = _test_llm_schema({
  model: "chatgpt",
  name: "CommentTagAtomicUnion",
})(typia.llm.schema<CommentTagAtomicUnion, "chatgpt">());
