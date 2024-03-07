import typia from "typia";

import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { CommentTagArrayUnion } from "../../structures/CommentTagArrayUnion";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsFunctionAsync_CommentTagArrayUnion =
  _test_functional_assertEqualsFunctionAsync(TypeGuardError)(
    "CommentTagArrayUnion",
  )(CommentTagArrayUnion)(
    (p: (input: CommentTagArrayUnion) => Promise<CommentTagArrayUnion>) =>
      typia.functional.assertEqualsFunction(p),
  );
