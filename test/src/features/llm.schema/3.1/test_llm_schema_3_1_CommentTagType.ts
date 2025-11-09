import typia from "typia";
import { CommentTagType } from "../../../structures/CommentTagType";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_3_1_CommentTagType = (): void =>
  _test_llm_schema({
    model: "3.1",
    name: "CommentTagType",
  })(typia.llm.schema<CommentTagType, "3.1">({}));