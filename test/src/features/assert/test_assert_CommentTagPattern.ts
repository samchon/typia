import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { CommentTagPattern } from "../../structures/CommentTagPattern";

import { TypeGuardError } from "typia";

export const test_assert_CommentTagPattern = _test_assert(TypeGuardError)(
  "CommentTagPattern",
)<CommentTagPattern>(CommentTagPattern)((input) =>
  typia.assert<CommentTagPattern>(input),
);
