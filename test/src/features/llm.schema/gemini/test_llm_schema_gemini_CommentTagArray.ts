import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { CommentTagArray } from "../../../structures/CommentTagArray";

export const test_llm_schema_gemini_CommentTagArray = (): void =>
  _test_llm_schema({
    model: "gemini",
    name: "CommentTagArray",
  })(typia.llm.schema<CommentTagArray, "gemini">());
