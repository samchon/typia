import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { CommentTagRangeBigInt } from "../../structures/CommentTagRangeBigInt";

export const test_assertEqualsCustom_CommentTagRangeBigInt = (): void =>
  _test_assertEquals(CustomGuardError)(
    "CommentTagRangeBigInt",
  )<CommentTagRangeBigInt>(CommentTagRangeBigInt)((input) =>
    typia.assertEquals<CommentTagRangeBigInt>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
