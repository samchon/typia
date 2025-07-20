import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { CommentTagRangeBigInt } from "../../structures/CommentTagRangeBigInt";

export const test_assertGuardEqualsCustom_CommentTagRangeBigInt = (): void =>
  _test_assertGuardEquals(CustomGuardError)(
    "CommentTagRangeBigInt",
  )<CommentTagRangeBigInt>(CommentTagRangeBigInt)((input) =>
    typia.assertGuardEquals<CommentTagRangeBigInt>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
