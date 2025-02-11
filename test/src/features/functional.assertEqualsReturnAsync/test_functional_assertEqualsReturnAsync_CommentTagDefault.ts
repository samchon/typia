import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { CommentTagDefault } from "../../structures/CommentTagDefault";

export const test_functional_assertEqualsReturnAsync_CommentTagDefault =
  _test_functional_assertEqualsReturnAsync(TypeGuardError)("CommentTagDefault")(
    CommentTagDefault,
  )((p: (input: CommentTagDefault) => Promise<CommentTagDefault>) =>
    typia.functional.assertEqualsReturn(p),
  );
