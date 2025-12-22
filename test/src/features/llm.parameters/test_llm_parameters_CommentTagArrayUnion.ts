import typia from "typia";

import { _test_llm_parameters } from "../../internal/_test_llm_parameters";
import { CommentTagArrayUnion } from "../../structures/CommentTagArrayUnion";

export const test_llm_parameters_CommentTagArrayUnion = (): void =>
  _test_llm_parameters("CommentTagArrayUnion")(
    typia.llm.parameters<CommentTagArrayUnionParameters>(),
  );

interface CommentTagArrayUnionParameters {
  regular: CommentTagArrayUnion;
  nullable: CommentTagArrayUnion | null;
  optional: CommentTagArrayUnion | undefined;
  faint: CommentTagArrayUnion | null | undefined;
  array: Array<CommentTagArrayUnion>;
}
