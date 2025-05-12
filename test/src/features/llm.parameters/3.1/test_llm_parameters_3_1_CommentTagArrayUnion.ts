import typia from "typia";

import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";
import { CommentTagArrayUnion } from "../../../structures/CommentTagArrayUnion";

export const test_llm_parameters_3_1_CommentTagArrayUnion =
  _test_llm_parameters({
    model: "3.1",
    name: "CommentTagArrayUnion",
  })(typia.llm.parameters<CommentTagArrayUnionParameters, "3.1">());

interface CommentTagArrayUnionParameters {
  regular: CommentTagArrayUnion;
  nullable: CommentTagArrayUnion | null;
  optional: CommentTagArrayUnion | undefined;
  faint: CommentTagArrayUnion | null | undefined;
  array: Array<CommentTagArrayUnion>;
}
