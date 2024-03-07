import typia from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { CommentTagArray } from "../../structures/CommentTagArray";

import { TypeGuardError } from "typia";

export const test_functional_assertReturnAsync_CommentTagArray =
  _test_functional_assertReturnAsync(TypeGuardError)("CommentTagArray")(
    CommentTagArray,
  )((p: (input: CommentTagArray) => Promise<CommentTagArray>) =>
    typia.functional.assertReturn(p),
  );
