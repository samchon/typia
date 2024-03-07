import typia from "typia";

import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { CommentTagType } from "../../structures/CommentTagType";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsReturnAsync_CommentTagType =
  _test_functional_assertEqualsReturnAsync(TypeGuardError)("CommentTagType")(
    CommentTagType,
  )((p: (input: CommentTagType) => Promise<CommentTagType>) =>
    typia.functional.assertEqualsReturn(p),
  );
