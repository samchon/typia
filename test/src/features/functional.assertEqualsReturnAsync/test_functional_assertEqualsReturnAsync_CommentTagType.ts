import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { CommentTagType } from "../../structures/CommentTagType";

export const test_functional_assertEqualsReturnAsync_CommentTagType =
  (): Promise<void> =>
    _test_functional_assertEqualsReturnAsync(TypeGuardError)("CommentTagType")(
      CommentTagType,
    )((p: (input: CommentTagType) => Promise<CommentTagType>) =>
      typia.functional.assertEqualsReturn(p),
    );
