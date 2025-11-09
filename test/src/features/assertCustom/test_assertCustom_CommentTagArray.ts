import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { CommentTagArray } from "../../structures/CommentTagArray";

export const test_assertCustom_CommentTagArray = (): void =>
  _test_assert(CustomGuardError)("CommentTagArray")<CommentTagArray>(
    CommentTagArray,
  )((input) =>
    typia.assert<CommentTagArray>(input, (p) => new CustomGuardError(p)),
  );
