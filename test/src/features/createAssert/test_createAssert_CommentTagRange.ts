import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { CommentTagRange } from "../../structures/CommentTagRange";

export const test_createAssert_CommentTagRange = (): void =>
  _test_assert(TypeGuardError)("CommentTagRange")<CommentTagRange>(
    CommentTagRange,
  )(typia.createAssert<CommentTagRange>());
