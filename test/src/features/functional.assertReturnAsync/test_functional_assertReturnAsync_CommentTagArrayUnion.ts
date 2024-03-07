import typia from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { CommentTagArrayUnion } from "../../structures/CommentTagArrayUnion";

import { TypeGuardError } from "typia";

export const test_functional_assertReturnAsync_CommentTagArrayUnion =
  _test_functional_assertReturnAsync(TypeGuardError)("CommentTagArrayUnion")(
    CommentTagArrayUnion,
  )((p: (input: CommentTagArrayUnion) => Promise<CommentTagArrayUnion>) =>
    typia.functional.assertReturn(p),
  );
