import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { CommentTagRangeBigInt } from "../../structures/CommentTagRangeBigInt";

export const test_createAssertGuard_CommentTagRangeBigInt = (): void =>
  _test_assertGuard(TypeGuardError)(
    "CommentTagRangeBigInt",
  )<CommentTagRangeBigInt>(CommentTagRangeBigInt)(
    typia.createAssertGuard<CommentTagRangeBigInt>(),
  );
