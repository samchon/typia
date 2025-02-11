import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { CommentTagArrayUnion } from "../../structures/CommentTagArrayUnion";

export const test_functional_assertEqualsReturnAsync_CommentTagArrayUnion =
  _test_functional_assertEqualsReturnAsync(TypeGuardError)(
    "CommentTagArrayUnion",
  )(CommentTagArrayUnion)(
    (p: (input: CommentTagArrayUnion) => Promise<CommentTagArrayUnion>) =>
      typia.functional.assertEqualsReturn(p),
  );
