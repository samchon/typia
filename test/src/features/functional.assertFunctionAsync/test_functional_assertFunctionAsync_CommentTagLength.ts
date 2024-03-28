import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { CommentTagLength } from "../../structures/CommentTagLength";

export const test_functional_assertFunctionAsync_CommentTagLength =
  _test_functional_assertFunctionAsync(TypeGuardError)("CommentTagLength")(
    CommentTagLength,
  )((p: (input: CommentTagLength) => Promise<CommentTagLength>) =>
    typia.functional.assertFunction(p),
  );
