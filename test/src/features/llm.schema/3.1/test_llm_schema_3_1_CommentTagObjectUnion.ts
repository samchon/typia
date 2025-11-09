import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { CommentTagObjectUnion } from "../../../structures/CommentTagObjectUnion";

export const test_llm_schema_3_1_CommentTagObjectUnion = (): void =>
  _test_llm_schema({
    model: "3.1",
    name: "CommentTagObjectUnion",
  })(typia.llm.schema<CommentTagObjectUnion, "3.1">({}));
