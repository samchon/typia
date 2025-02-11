import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { CommentTagNaN } from "../../structures/CommentTagNaN";

export const test_functional_assertFunctionAsync_CommentTagNaN =
  _test_functional_assertFunctionAsync(TypeGuardError)("CommentTagNaN")(
    CommentTagNaN,
  )((p: (input: CommentTagNaN) => Promise<CommentTagNaN>) =>
    typia.functional.assertFunction(p),
  );
