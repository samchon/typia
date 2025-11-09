import typia from "typia";

import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { CommentTagArrayUnion } from "../../structures/CommentTagArrayUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsReturnAsyncCustom_CommentTagArrayUnion = (): Promise<void> => _test_functional_assertEqualsReturnAsync(CustomGuardError)(
  "CommentTagArrayUnion"
)(CommentTagArrayUnion)(
  (p: (input: CommentTagArrayUnion) => Promise<CommentTagArrayUnion>) =>
    typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
)