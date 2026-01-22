import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { CommentTagPattern } from "../../structures/CommentTagPattern";

export const test_createAssert_CommentTagPattern = (): void =>
  _test_assert(TypeGuardError)("CommentTagPattern")<CommentTagPattern>(
    CommentTagPattern,
  )(typia.createAssert<CommentTagPattern>());
