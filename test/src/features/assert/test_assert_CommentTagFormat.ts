import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { CommentTagFormat } from "../../structures/CommentTagFormat";

export const test_assert_CommentTagFormat = _test_assert(TypeGuardError)(
  "CommentTagFormat",
)<CommentTagFormat>(CommentTagFormat)((input) =>
  typia.assert<CommentTagFormat>(input),
);
