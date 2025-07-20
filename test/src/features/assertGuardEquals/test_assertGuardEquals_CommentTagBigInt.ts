import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { CommentTagBigInt } from "../../structures/CommentTagBigInt";

export const test_assertGuardEquals_CommentTagBigInt = (): void =>
  _test_assertGuardEquals(TypeGuardError)("CommentTagBigInt")<CommentTagBigInt>(
    CommentTagBigInt,
  )((input) => typia.assertGuardEquals<CommentTagBigInt>(input));
