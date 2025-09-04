import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { CommentTagArray } from "../../structures/CommentTagArray";

export const test_functional_assertEqualsReturnAsyncCustom_CommentTagArray =
  (): Promise<void> =>
    _test_functional_assertEqualsReturnAsync(CustomGuardError)(
      "CommentTagArray",
    )(CommentTagArray)(
      (p: (input: CommentTagArray) => Promise<CommentTagArray>) =>
        typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
    );
