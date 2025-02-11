import typia from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { CommentTagRange } from "../../structures/CommentTagRange";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertFunctionAsyncCustom_CommentTagRange = _test_functional_assertFunctionAsync(CustomGuardError)(
  "CommentTagRange"
)(CommentTagRange)(
  (p: (input: CommentTagRange) => Promise<CommentTagRange>) =>
    typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
)