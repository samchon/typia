import typia from "typia";

import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { CommentTagLength } from "../../structures/CommentTagLength";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsReturnAsyncCustom_CommentTagLength = (): Promise<void> => _test_functional_assertEqualsReturnAsync(CustomGuardError)(
  "CommentTagLength"
)(CommentTagLength)(
  (p: (input: CommentTagLength) => Promise<CommentTagLength>) =>
    typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
)