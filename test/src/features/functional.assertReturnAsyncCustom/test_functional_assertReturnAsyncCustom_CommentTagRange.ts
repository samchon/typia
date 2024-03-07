import typia from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { CommentTagRange } from "../../structures/CommentTagRange";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertReturnAsyncCustom_CommentTagRange =
  _test_functional_assertReturnAsync(CustomGuardError)("CommentTagRange")(
    CommentTagRange,
  )((p: (input: CommentTagRange) => Promise<CommentTagRange>) =>
    typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );
