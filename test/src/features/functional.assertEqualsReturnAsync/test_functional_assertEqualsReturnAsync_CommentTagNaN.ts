import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { CommentTagNaN } from "../../structures/CommentTagNaN";

export const test_functional_assertEqualsReturnAsync_CommentTagNaN =
  (): Promise<void> =>
    _test_functional_assertEqualsReturnAsync(TypeGuardError)("CommentTagNaN")(
      CommentTagNaN,
    )((p: (input: CommentTagNaN) => Promise<CommentTagNaN>) =>
      typia.functional.assertEqualsReturn(p),
    );
