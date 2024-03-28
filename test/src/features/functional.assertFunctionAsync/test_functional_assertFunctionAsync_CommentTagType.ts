import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { CommentTagType } from "../../structures/CommentTagType";

export const test_functional_assertFunctionAsync_CommentTagType =
  _test_functional_assertFunctionAsync(TypeGuardError)("CommentTagType")(
    CommentTagType,
  )((p: (input: CommentTagType) => Promise<CommentTagType>) =>
    typia.functional.assertFunction(p),
  );
