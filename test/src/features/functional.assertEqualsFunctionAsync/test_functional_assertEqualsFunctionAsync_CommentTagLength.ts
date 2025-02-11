import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { CommentTagLength } from "../../structures/CommentTagLength";

export const test_functional_assertEqualsFunctionAsync_CommentTagLength =
  _test_functional_assertEqualsFunctionAsync(TypeGuardError)(
    "CommentTagLength",
  )(CommentTagLength)(
    (p: (input: CommentTagLength) => Promise<CommentTagLength>) =>
      typia.functional.assertEqualsFunction(p),
  );
