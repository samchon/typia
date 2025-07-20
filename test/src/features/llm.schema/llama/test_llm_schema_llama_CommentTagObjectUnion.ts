import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { CommentTagObjectUnion } from "../../../structures/CommentTagObjectUnion";

export const test_llm_schema_llama_CommentTagObjectUnion = (): void =>
  _test_llm_schema({
    model: "llama",
    name: "CommentTagObjectUnion",
  })(typia.llm.schema<CommentTagObjectUnion, "llama">({}));
