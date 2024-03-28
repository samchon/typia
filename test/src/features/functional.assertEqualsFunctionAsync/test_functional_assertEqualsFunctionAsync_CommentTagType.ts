import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { CommentTagType } from "../../structures/CommentTagType";

export const test_functional_assertEqualsFunctionAsync_CommentTagType =
  _test_functional_assertEqualsFunctionAsync(TypeGuardError)("CommentTagType")(
    CommentTagType,
  )((p: (input: CommentTagType) => Promise<CommentTagType>) =>
    typia.functional.assertEqualsFunction(p),
  );
