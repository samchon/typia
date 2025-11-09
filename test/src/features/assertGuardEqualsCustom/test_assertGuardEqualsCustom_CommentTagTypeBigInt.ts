import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { CommentTagTypeBigInt } from "../../structures/CommentTagTypeBigInt";

export const test_assertGuardEqualsCustom_CommentTagTypeBigInt = (): void =>
  _test_assertGuardEquals(CustomGuardError)(
    "CommentTagTypeBigInt",
  )<CommentTagTypeBigInt>(CommentTagTypeBigInt)((input) =>
    typia.assertGuardEquals<CommentTagTypeBigInt>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
