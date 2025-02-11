import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { CommentTagArrayUnion } from "../../structures/CommentTagArrayUnion";

export const test_functional_assertEqualsReturnAsyncCustom_CommentTagArrayUnion =
  _test_functional_assertEqualsReturnAsync(CustomGuardError)(
    "CommentTagArrayUnion",
  )(CommentTagArrayUnion)(
    (p: (input: CommentTagArrayUnion) => Promise<CommentTagArrayUnion>) =>
      typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
  );
