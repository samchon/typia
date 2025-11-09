import typia from "typia";

import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { CommentTagArrayUnion } from "../../structures/CommentTagArrayUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsReturnCustom_CommentTagArrayUnion = (): void => _test_functional_assertEqualsReturn(CustomGuardError)(
  "CommentTagArrayUnion"
)(CommentTagArrayUnion)(
  (p: (input: CommentTagArrayUnion) => CommentTagArrayUnion) => typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
)