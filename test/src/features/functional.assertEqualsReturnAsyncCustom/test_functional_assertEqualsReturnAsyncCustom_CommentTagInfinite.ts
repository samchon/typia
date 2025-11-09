import typia from "typia";

import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { CommentTagInfinite } from "../../structures/CommentTagInfinite";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsReturnAsyncCustom_CommentTagInfinite = (): Promise<void> => _test_functional_assertEqualsReturnAsync(CustomGuardError)(
  "CommentTagInfinite"
)(CommentTagInfinite)(
  (p: (input: CommentTagInfinite) => Promise<CommentTagInfinite>) =>
    typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
)