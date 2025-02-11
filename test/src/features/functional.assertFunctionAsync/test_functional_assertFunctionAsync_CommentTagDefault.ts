import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { CommentTagDefault } from "../../structures/CommentTagDefault";

export const test_functional_assertFunctionAsync_CommentTagDefault =
  _test_functional_assertFunctionAsync(TypeGuardError)("CommentTagDefault")(
    CommentTagDefault,
  )((p: (input: CommentTagDefault) => Promise<CommentTagDefault>) =>
    typia.functional.assertFunction(p),
  );
