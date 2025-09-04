import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { CommentTagPattern } from "../../structures/CommentTagPattern";

export const test_assert_CommentTagPattern = (): void =>
  _test_assert(TypeGuardError)("CommentTagPattern")<CommentTagPattern>(
    CommentTagPattern,
  )((input) => typia.assert<CommentTagPattern>(input));
