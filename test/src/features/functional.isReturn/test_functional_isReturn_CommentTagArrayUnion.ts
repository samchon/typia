import typia from "typia";

import { _test_functional_isReturn } from "../../internal/_test_functional_isReturn";
import { CommentTagArrayUnion } from "../../structures/CommentTagArrayUnion";

export const test_functional_isReturn_CommentTagArrayUnion = (): void => _test_functional_isReturn(
  "CommentTagArrayUnion"
)(CommentTagArrayUnion)(
  (p: (input: CommentTagArrayUnion) => CommentTagArrayUnion) => typia.functional.isReturn(p),
)