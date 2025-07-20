import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { CommentTagTypeBigInt } from "../../structures/CommentTagTypeBigInt";

export const test_assertCustom_CommentTagTypeBigInt = (): void =>
  _test_assert(CustomGuardError)("CommentTagTypeBigInt")<CommentTagTypeBigInt>(
    CommentTagTypeBigInt,
  )((input) =>
    typia.assert<CommentTagTypeBigInt>(input, (p) => new CustomGuardError(p)),
  );
