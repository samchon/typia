import typia from "typia";

import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { CommentTagArrayUnion } from "../../structures/CommentTagArrayUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsFunctionAsyncCustom_CommentTagArrayUnion = (): Promise<void> => _test_functional_assertEqualsFunctionAsync(CustomGuardError)(
  "CommentTagArrayUnion"
)(CommentTagArrayUnion)(
  (p: (input: CommentTagArrayUnion) => Promise<CommentTagArrayUnion>) =>
    typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
)