import typia from "typia";

import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";
import { CommentTagArrayUnion } from "../../../structures/CommentTagArrayUnion";

export const test_llm_parameters_llama_CommentTagArrayUnion = (): void =>
  _test_llm_parameters({
    model: "llama",
    name: "CommentTagArrayUnion",
  })(typia.llm.parameters<CommentTagArrayUnionParameters, "llama">());

interface CommentTagArrayUnionParameters {
  regular: CommentTagArrayUnion;
  nullable: CommentTagArrayUnion | null;
  optional: CommentTagArrayUnion | undefined;
  faint: CommentTagArrayUnion | null | undefined;
  array: Array<CommentTagArrayUnion>;
}
