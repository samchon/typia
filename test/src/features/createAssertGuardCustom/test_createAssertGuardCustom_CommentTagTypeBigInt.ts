import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { CommentTagTypeBigInt } from "../../structures/CommentTagTypeBigInt";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertGuardCustom_CommentTagTypeBigInt =
  _test_assertGuard(CustomGuardError)(
    "CommentTagTypeBigInt",
  )<CommentTagTypeBigInt>(CommentTagTypeBigInt)(
    typia.createAssertGuard<CommentTagTypeBigInt>(
      (p) => new CustomGuardError(p),
    ),
  );
