import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { CommentTagArray } from "../../structures/CommentTagArray";

export const test_assert_CommentTagArray = (): void =>
  _test_assert(TypeGuardError)("CommentTagArray")<CommentTagArray>(
    CommentTagArray,
  )((input) => typia.assert<CommentTagArray>(input));
