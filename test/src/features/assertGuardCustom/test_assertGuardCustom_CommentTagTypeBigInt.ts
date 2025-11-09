import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { CommentTagTypeBigInt } from "../../structures/CommentTagTypeBigInt";

export const test_assertGuardCustom_CommentTagTypeBigInt = (): void =>
  _test_assertGuard(CustomGuardError)(
    "CommentTagTypeBigInt",
  )<CommentTagTypeBigInt>(CommentTagTypeBigInt)((input) =>
    typia.assertGuard<CommentTagTypeBigInt>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
