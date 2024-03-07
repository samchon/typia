import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { CommentTagDefault } from "../../structures/CommentTagDefault";

import { TypeGuardError } from "typia";

export const test_createAssert_CommentTagDefault = _test_assert(TypeGuardError)(
  "CommentTagDefault",
)<CommentTagDefault>(CommentTagDefault)(
  typia.createAssert<CommentTagDefault>(),
);
