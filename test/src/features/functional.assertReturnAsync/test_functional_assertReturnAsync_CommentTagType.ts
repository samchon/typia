import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { CommentTagType } from "../../structures/CommentTagType";

export const test_functional_assertReturnAsync_CommentTagType =
  _test_functional_assertReturnAsync(TypeGuardError)("CommentTagType")(
    CommentTagType,
  )((p: (input: CommentTagType) => Promise<CommentTagType>) =>
    typia.functional.assertReturn(p),
  );
