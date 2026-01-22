import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { CommentTagBigInt } from "../../structures/CommentTagBigInt";

export const test_assertCustom_CommentTagBigInt = (): void =>
  _test_assert(CustomGuardError)("CommentTagBigInt")<CommentTagBigInt>(
    CommentTagBigInt,
  )((input) =>
    typia.assert<CommentTagBigInt>(input, (p) => new CustomGuardError(p)),
  );
