import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { CommentTagNaN } from "../../structures/CommentTagNaN";

export const test_createAssertEquals_CommentTagNaN = (): void =>
  _test_assertEquals(TypeGuardError)("CommentTagNaN")<CommentTagNaN>(
    CommentTagNaN,
  )(typia.createAssertEquals<CommentTagNaN>());
