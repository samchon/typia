import typia from "typia";
import { CommentTagDefault } from "../../../structures/CommentTagDefault";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_3_1_CommentTagDefault = (): void =>
  _test_llm_schema({
    model: "3.1",
    name: "CommentTagDefault",
  })(typia.llm.schema<CommentTagDefault, "3.1">({}));