import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { CommentTagLength } from "../../structures/CommentTagLength";

export const test_createAssert_CommentTagLength = (): void =>
  _test_assert(TypeGuardError)("CommentTagLength")<CommentTagLength>(
    CommentTagLength,
  )(typia.createAssert<CommentTagLength>());
