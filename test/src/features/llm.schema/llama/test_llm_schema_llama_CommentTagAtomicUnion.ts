import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { CommentTagAtomicUnion } from "../../../structures/CommentTagAtomicUnion";

export const test_llm_schema_llama_CommentTagAtomicUnion = _test_llm_schema({
  model: "llama",
  name: "CommentTagAtomicUnion",
})(typia.llm.schema<CommentTagAtomicUnion, "llama">({}));
