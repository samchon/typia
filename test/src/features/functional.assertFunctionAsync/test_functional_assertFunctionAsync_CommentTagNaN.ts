import typia from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { CommentTagNaN } from "../../structures/CommentTagNaN";

import { TypeGuardError } from "typia";

export const test_functional_assertFunctionAsync_CommentTagNaN = (): Promise<void> => _test_functional_assertFunctionAsync(TypeGuardError)(
  "CommentTagNaN"
)(CommentTagNaN)(
  (p: (input: CommentTagNaN) => Promise<CommentTagNaN>) =>
    typia.functional.assertFunction(p),
)