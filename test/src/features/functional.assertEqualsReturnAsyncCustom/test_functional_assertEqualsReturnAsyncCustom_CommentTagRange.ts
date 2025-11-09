import typia from "typia";

import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { CommentTagRange } from "../../structures/CommentTagRange";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsReturnAsyncCustom_CommentTagRange = (): Promise<void> => _test_functional_assertEqualsReturnAsync(CustomGuardError)(
  "CommentTagRange"
)(CommentTagRange)(
  (p: (input: CommentTagRange) => Promise<CommentTagRange>) =>
    typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
)