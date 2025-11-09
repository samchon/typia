import typia from "typia";
import { CommentTagLength } from "../../../structures/CommentTagLength";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_3_0_CommentTagLength = (): void =>
  _test_llm_schema({
    model: "3.0",
    name: "CommentTagLength",
  })(typia.llm.schema<CommentTagLength, "3.0">());