import typia from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { CommentTagBigInt } from "../../structures/CommentTagBigInt";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertFunctionAsyncCustom_CommentTagBigInt = (): Promise<void> => _test_functional_assertFunctionAsync(CustomGuardError)(
  "CommentTagBigInt"
)(CommentTagBigInt)(
  (p: (input: CommentTagBigInt) => Promise<CommentTagBigInt>) =>
    typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
)