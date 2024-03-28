import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { CommentTagBigInt } from "../../structures/CommentTagBigInt";

export const test_createAssertGuardEqualsCustom_CommentTagBigInt =
  _test_assertGuardEquals(CustomGuardError)(
    "CommentTagBigInt",
  )<CommentTagBigInt>(CommentTagBigInt)(
    typia.createAssertGuardEquals<CommentTagBigInt>(
      (p) => new CustomGuardError(p),
    ),
  );
