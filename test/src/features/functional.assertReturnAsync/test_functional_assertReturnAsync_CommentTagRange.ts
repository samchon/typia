import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { CommentTagRange } from "../../structures/CommentTagRange";

export const test_functional_assertReturnAsync_CommentTagRange =
  _test_functional_assertReturnAsync(TypeGuardError)("CommentTagRange")(
    CommentTagRange,
  )((p: (input: CommentTagRange) => Promise<CommentTagRange>) =>
    typia.functional.assertReturn(p),
  );
