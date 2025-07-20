import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { CommentTagRange } from "../../../structures/CommentTagRange";

export const test_llm_schema_llama_CommentTagRange = (): void =>
  _test_llm_schema({
    model: "llama",
    name: "CommentTagRange",
  })(typia.llm.schema<CommentTagRange, "llama">({}));
