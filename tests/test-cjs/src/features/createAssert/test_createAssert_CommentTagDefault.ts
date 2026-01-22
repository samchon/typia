import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { CommentTagDefault } from "../../structures/CommentTagDefault";

export const test_createAssert_CommentTagDefault = (): void =>
  _test_assert(TypeGuardError)("CommentTagDefault")<CommentTagDefault>(
    CommentTagDefault,
  )(typia.createAssert<CommentTagDefault>());
