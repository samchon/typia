import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { CommentTagPattern } from "../../structures/CommentTagPattern";

export const test_functional_assertReturnAsyncCustom_CommentTagPattern =
  _test_functional_assertReturnAsync(CustomGuardError)("CommentTagPattern")(
    CommentTagPattern,
  )((p: (input: CommentTagPattern) => Promise<CommentTagPattern>) =>
    typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );
