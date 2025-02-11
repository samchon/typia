import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { CommentTagRange } from "../../structures/CommentTagRange";

export const test_functional_assertEqualsFunctionAsync_CommentTagRange =
  _test_functional_assertEqualsFunctionAsync(TypeGuardError)("CommentTagRange")(
    CommentTagRange,
  )((p: (input: CommentTagRange) => Promise<CommentTagRange>) =>
    typia.functional.assertEqualsFunction(p),
  );
