import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { CommentTagNaN } from "../../structures/CommentTagNaN";

export const test_functional_assertReturnAsync_CommentTagNaN =
  _test_functional_assertReturnAsync(TypeGuardError)("CommentTagNaN")(
    CommentTagNaN,
  )((p: (input: CommentTagNaN) => Promise<CommentTagNaN>) =>
    typia.functional.assertReturn(p),
  );
