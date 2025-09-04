import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { CommentTagNaN } from "../../structures/CommentTagNaN";

export const test_functional_assertEqualsReturnAsyncCustom_CommentTagNaN =
  (): Promise<void> =>
    _test_functional_assertEqualsReturnAsync(CustomGuardError)("CommentTagNaN")(
      CommentTagNaN,
    )((p: (input: CommentTagNaN) => Promise<CommentTagNaN>) =>
      typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
    );
