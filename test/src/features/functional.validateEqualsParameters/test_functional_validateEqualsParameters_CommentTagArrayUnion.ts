import typia from "typia";

import { _test_functional_validateEqualsParameters } from "../../internal/_test_functional_validateEqualsParameters";
import { CommentTagArrayUnion } from "../../structures/CommentTagArrayUnion";

export const test_functional_validateEqualsParameters_CommentTagArrayUnion = (): void => _test_functional_validateEqualsParameters(
  "CommentTagArrayUnion"
)(CommentTagArrayUnion)(
  (p: (input: CommentTagArrayUnion) => CommentTagArrayUnion) => typia.functional.validateEqualsParameters(p),
)