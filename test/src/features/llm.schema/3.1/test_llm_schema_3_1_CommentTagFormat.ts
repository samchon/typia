import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { CommentTagFormat } from "../../../structures/CommentTagFormat";

export const test_llm_schema_3_1_CommentTagFormat = _test_llm_schema({
  model: "3.1",
  name: "CommentTagFormat",
})(typia.llm.schema<CommentTagFormat, "3.1">({}));
