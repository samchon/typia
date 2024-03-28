import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { CommentTagPattern } from "../../structures/CommentTagPattern";

export const test_functional_assertFunctionAsync_CommentTagPattern =
  _test_functional_assertFunctionAsync(TypeGuardError)("CommentTagPattern")(
    CommentTagPattern,
  )((p: (input: CommentTagPattern) => Promise<CommentTagPattern>) =>
    typia.functional.assertFunction(p),
  );
