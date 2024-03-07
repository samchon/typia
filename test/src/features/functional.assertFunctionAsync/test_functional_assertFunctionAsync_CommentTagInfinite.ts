import typia from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { CommentTagInfinite } from "../../structures/CommentTagInfinite";

import { TypeGuardError } from "typia";

export const test_functional_assertFunctionAsync_CommentTagInfinite =
  _test_functional_assertFunctionAsync(TypeGuardError)("CommentTagInfinite")(
    CommentTagInfinite,
  )((p: (input: CommentTagInfinite) => Promise<CommentTagInfinite>) =>
    typia.functional.assertFunction(p),
  );
