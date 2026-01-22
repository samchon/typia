import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { CommentTagRange } from "../../structures/CommentTagRange";

export const test_assertCustom_CommentTagRange = (): void =>
  _test_assert(CustomGuardError)("CommentTagRange")<CommentTagRange>(
    CommentTagRange,
  )((input) =>
    typia.assert<CommentTagRange>(input, (p) => new CustomGuardError(p)),
  );
