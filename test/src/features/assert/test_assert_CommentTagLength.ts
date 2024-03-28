import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { CommentTagLength } from "../../structures/CommentTagLength";

export const test_assert_CommentTagLength = _test_assert(TypeGuardError)(
  "CommentTagLength",
)<CommentTagLength>(CommentTagLength)((input) =>
  typia.assert<CommentTagLength>(input),
);
