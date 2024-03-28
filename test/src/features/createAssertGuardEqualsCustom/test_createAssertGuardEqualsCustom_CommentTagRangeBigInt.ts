import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { CommentTagRangeBigInt } from "../../structures/CommentTagRangeBigInt";

export const test_createAssertGuardEqualsCustom_CommentTagRangeBigInt =
  _test_assertGuardEquals(CustomGuardError)(
    "CommentTagRangeBigInt",
  )<CommentTagRangeBigInt>(CommentTagRangeBigInt)(
    typia.createAssertGuardEquals<CommentTagRangeBigInt>(
      (p) => new CustomGuardError(p),
    ),
  );
