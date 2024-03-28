import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { CommentTagLength } from "../../structures/CommentTagLength";

export const test_functional_assertReturnAsync_CommentTagLength =
  _test_functional_assertReturnAsync(TypeGuardError)("CommentTagLength")(
    CommentTagLength,
  )((p: (input: CommentTagLength) => Promise<CommentTagLength>) =>
    typia.functional.assertReturn(p),
  );
