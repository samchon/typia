import typia from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { CommentTagArray } from "../../structures/CommentTagArray";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertReturnAsyncCustom_CommentTagArray = (): Promise<void> => _test_functional_assertReturnAsync(CustomGuardError)(
  "CommentTagArray"
)(CommentTagArray)(
  (p: (input: CommentTagArray) => Promise<CommentTagArray>) =>
    typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
)