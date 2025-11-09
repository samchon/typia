import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { CommentTagArray } from "../../structures/CommentTagArray";

export const test_createAssertEquals_CommentTagArray = (): void =>
  _test_assertEquals(TypeGuardError)("CommentTagArray")<CommentTagArray>(
    CommentTagArray,
  )(typia.createAssertEquals<CommentTagArray>());
