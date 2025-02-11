import typia from "typia";

import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { CommentTagInfinite } from "../../structures/CommentTagInfinite";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsFunctionAsync_CommentTagInfinite = _test_functional_assertEqualsFunctionAsync(TypeGuardError)(
  "CommentTagInfinite"
)(CommentTagInfinite)(
  (p: (input: CommentTagInfinite) => Promise<CommentTagInfinite>) =>
    typia.functional.assertEqualsFunction(p),
)