import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { CommentTagPattern } from "../../structures/CommentTagPattern";

export const test_functional_assertEqualsFunctionAsync_CommentTagPattern =
  _test_functional_assertEqualsFunctionAsync(TypeGuardError)(
    "CommentTagPattern",
  )(CommentTagPattern)(
    (p: (input: CommentTagPattern) => Promise<CommentTagPattern>) =>
      typia.functional.assertEqualsFunction(p),
  );
