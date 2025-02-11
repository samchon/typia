import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { CommentTagRange } from "../../structures/CommentTagRange";

export const test_functional_assertEqualsReturnAsync_CommentTagRange =
  _test_functional_assertEqualsReturnAsync(TypeGuardError)("CommentTagRange")(
    CommentTagRange,
  )((p: (input: CommentTagRange) => Promise<CommentTagRange>) =>
    typia.functional.assertEqualsReturn(p),
  );
