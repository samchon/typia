import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { CommentTagLength } from "../../structures/CommentTagLength";

import { TypeGuardError } from "typia";

export const test_createAssert_CommentTagLength = _test_assert(TypeGuardError)(
  "CommentTagLength",
)<CommentTagLength>(CommentTagLength)(typia.createAssert<CommentTagLength>());
