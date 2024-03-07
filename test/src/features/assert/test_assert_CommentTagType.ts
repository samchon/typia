import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { CommentTagType } from "../../structures/CommentTagType";

import { TypeGuardError } from "typia";

export const test_assert_CommentTagType = _test_assert(TypeGuardError)(
  "CommentTagType",
)<CommentTagType>(CommentTagType)((input) =>
  typia.assert<CommentTagType>(input),
);
