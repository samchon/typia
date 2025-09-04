import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { CommentTagArray } from "../../structures/CommentTagArray";

export const test_functional_assertEqualsReturnAsync_CommentTagArray =
  (): Promise<void> =>
    _test_functional_assertEqualsReturnAsync(TypeGuardError)("CommentTagArray")(
      CommentTagArray,
    )((p: (input: CommentTagArray) => Promise<CommentTagArray>) =>
      typia.functional.assertEqualsReturn(p),
    );
