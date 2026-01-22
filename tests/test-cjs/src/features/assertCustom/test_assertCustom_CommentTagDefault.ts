import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { CommentTagDefault } from "../../structures/CommentTagDefault";

export const test_assertCustom_CommentTagDefault = (): void =>
  _test_assert(CustomGuardError)("CommentTagDefault")<CommentTagDefault>(
    CommentTagDefault,
  )((input) =>
    typia.assert<CommentTagDefault>(input, (p) => new CustomGuardError(p)),
  );
