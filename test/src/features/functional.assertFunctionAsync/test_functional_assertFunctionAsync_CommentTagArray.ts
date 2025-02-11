import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { CommentTagArray } from "../../structures/CommentTagArray";

export const test_functional_assertFunctionAsync_CommentTagArray =
  _test_functional_assertFunctionAsync(TypeGuardError)("CommentTagArray")(
    CommentTagArray,
  )((p: (input: CommentTagArray) => Promise<CommentTagArray>) =>
    typia.functional.assertFunction(p),
  );
