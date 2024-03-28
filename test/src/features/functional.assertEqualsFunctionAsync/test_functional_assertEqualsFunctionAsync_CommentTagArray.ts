import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { CommentTagArray } from "../../structures/CommentTagArray";

export const test_functional_assertEqualsFunctionAsync_CommentTagArray =
  _test_functional_assertEqualsFunctionAsync(TypeGuardError)("CommentTagArray")(
    CommentTagArray,
  )((p: (input: CommentTagArray) => Promise<CommentTagArray>) =>
    typia.functional.assertEqualsFunction(p),
  );
