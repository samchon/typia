import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { CommentTagDefault } from "../../structures/CommentTagDefault";

export const test_functional_assertReturnAsync_CommentTagDefault =
  _test_functional_assertReturnAsync(TypeGuardError)("CommentTagDefault")(
    CommentTagDefault,
  )((p: (input: CommentTagDefault) => Promise<CommentTagDefault>) =>
    typia.functional.assertReturn(p),
  );
