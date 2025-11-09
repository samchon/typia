import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { CommentTagRangeBigInt } from "../../structures/CommentTagRangeBigInt";

export const test_createAssertGuardCustom_CommentTagRangeBigInt = (): void =>
  _test_assertGuard(CustomGuardError)(
    "CommentTagRangeBigInt",
  )<CommentTagRangeBigInt>(CommentTagRangeBigInt)(
    typia.createAssertGuard<CommentTagRangeBigInt>(
      (p) => new CustomGuardError(p),
    ),
  );
