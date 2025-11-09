import typia from "typia";
import { CommentTagRange } from "../../../structures/CommentTagRange";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_3_1_CommentTagRange = (): void =>
  _test_llm_schema({
    model: "3.1",
    name: "CommentTagRange",
  })(typia.llm.schema<CommentTagRange, "3.1">({}));