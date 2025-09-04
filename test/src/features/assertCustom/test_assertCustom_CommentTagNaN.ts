import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { CommentTagNaN } from "../../structures/CommentTagNaN";

export const test_assertCustom_CommentTagNaN = (): void =>
  _test_assert(CustomGuardError)("CommentTagNaN")<CommentTagNaN>(CommentTagNaN)(
    (input) =>
      typia.assert<CommentTagNaN>(input, (p) => new CustomGuardError(p)),
  );
