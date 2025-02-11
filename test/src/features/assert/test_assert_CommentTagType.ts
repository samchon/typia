import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { CommentTagType } from "../../structures/CommentTagType";

export const test_assert_CommentTagType = _test_assert(TypeGuardError)(
  "CommentTagType",
)<CommentTagType>(CommentTagType)((input) =>
  typia.assert<CommentTagType>(input),
);
