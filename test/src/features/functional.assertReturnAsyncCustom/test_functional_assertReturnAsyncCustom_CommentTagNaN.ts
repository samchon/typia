import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { CommentTagNaN } from "../../structures/CommentTagNaN";

export const test_functional_assertReturnAsyncCustom_CommentTagNaN =
  _test_functional_assertReturnAsync(CustomGuardError)("CommentTagNaN")(
    CommentTagNaN,
  )((p: (input: CommentTagNaN) => Promise<CommentTagNaN>) =>
    typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );
