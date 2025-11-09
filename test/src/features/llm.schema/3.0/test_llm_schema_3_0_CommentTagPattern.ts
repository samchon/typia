import typia from "typia";
import { CommentTagPattern } from "../../../structures/CommentTagPattern";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_3_0_CommentTagPattern = (): void =>
  _test_llm_schema({
    model: "3.0",
    name: "CommentTagPattern",
  })(typia.llm.schema<CommentTagPattern, "3.0">());