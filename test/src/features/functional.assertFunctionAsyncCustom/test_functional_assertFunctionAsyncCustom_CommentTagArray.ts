import typia from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { CommentTagArray } from "../../structures/CommentTagArray";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertFunctionAsyncCustom_CommentTagArray = (): Promise<void> => _test_functional_assertFunctionAsync(CustomGuardError)(
  "CommentTagArray"
)(CommentTagArray)(
  (p: (input: CommentTagArray) => Promise<CommentTagArray>) =>
    typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
)