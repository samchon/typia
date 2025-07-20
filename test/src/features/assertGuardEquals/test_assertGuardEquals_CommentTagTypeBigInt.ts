import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { CommentTagTypeBigInt } from "../../structures/CommentTagTypeBigInt";

export const test_assertGuardEquals_CommentTagTypeBigInt = (): void =>
  _test_assertGuardEquals(TypeGuardError)(
    "CommentTagTypeBigInt",
  )<CommentTagTypeBigInt>(CommentTagTypeBigInt)((input) =>
    typia.assertGuardEquals<CommentTagTypeBigInt>(input),
  );
