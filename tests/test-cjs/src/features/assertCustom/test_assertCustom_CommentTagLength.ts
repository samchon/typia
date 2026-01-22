import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { CommentTagLength } from "../../structures/CommentTagLength";

export const test_assertCustom_CommentTagLength = (): void =>
  _test_assert(CustomGuardError)("CommentTagLength")<CommentTagLength>(
    CommentTagLength,
  )((input) =>
    typia.assert<CommentTagLength>(input, (p) => new CustomGuardError(p)),
  );
