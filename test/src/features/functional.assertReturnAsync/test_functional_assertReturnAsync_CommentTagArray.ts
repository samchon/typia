import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { CommentTagArray } from "../../structures/CommentTagArray";

export const test_functional_assertReturnAsync_CommentTagArray =
  (): Promise<void> =>
    _test_functional_assertReturnAsync(TypeGuardError)("CommentTagArray")(
      CommentTagArray,
    )((p: (input: CommentTagArray) => Promise<CommentTagArray>) =>
      typia.functional.assertReturn(p),
    );
