import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { CommentTagFormat } from "../../structures/CommentTagFormat";

export const test_createAssert_CommentTagFormat = (): void =>
  _test_assert(TypeGuardError)("CommentTagFormat")<CommentTagFormat>(
    CommentTagFormat,
  )(typia.createAssert<CommentTagFormat>());
