import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { CommentTagRangeBigInt } from "../../structures/CommentTagRangeBigInt";

export const test_createAssertEqualsCustom_CommentTagRangeBigInt =
  _test_assertEquals(CustomGuardError)(
    "CommentTagRangeBigInt",
  )<CommentTagRangeBigInt>(CommentTagRangeBigInt)(
    typia.createAssertEquals<CommentTagRangeBigInt>(
      (p) => new CustomGuardError(p),
    ),
  );
