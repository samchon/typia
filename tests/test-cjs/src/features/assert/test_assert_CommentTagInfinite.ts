import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { CommentTagInfinite } from "../../structures/CommentTagInfinite";

export const test_assert_CommentTagInfinite = (): void =>
  _test_assert(TypeGuardError)("CommentTagInfinite")<CommentTagInfinite>(
    CommentTagInfinite,
  )((input) => typia.assert<CommentTagInfinite>(input));
