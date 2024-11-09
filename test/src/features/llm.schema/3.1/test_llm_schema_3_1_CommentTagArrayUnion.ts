import typia from "typia";
import { CommentTagArrayUnion } from "../../../structures/CommentTagArrayUnion";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_3_1_CommentTagArrayUnion = 
  _test_llm_schema({
    model: "3.1",
    name: "CommentTagArrayUnion",
  })(typia.llm.schema<CommentTagArrayUnion, "3.1">());