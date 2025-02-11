import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { CommentTagLength } from "../../structures/CommentTagLength";

export const test_functional_assertEqualsReturnAsync_CommentTagLength =
  _test_functional_assertEqualsReturnAsync(TypeGuardError)("CommentTagLength")(
    CommentTagLength,
  )((p: (input: CommentTagLength) => Promise<CommentTagLength>) =>
    typia.functional.assertEqualsReturn(p),
  );
