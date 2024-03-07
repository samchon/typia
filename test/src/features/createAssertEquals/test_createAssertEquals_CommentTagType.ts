import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { CommentTagType } from "../../structures/CommentTagType";

import { TypeGuardError } from "typia";

export const test_createAssertEquals_CommentTagType = _test_assertEquals(
  TypeGuardError,
)("CommentTagType")<CommentTagType>(CommentTagType)(
  typia.createAssertEquals<CommentTagType>(),
);
