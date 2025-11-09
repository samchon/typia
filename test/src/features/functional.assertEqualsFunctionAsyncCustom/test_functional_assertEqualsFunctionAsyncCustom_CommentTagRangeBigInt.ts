import typia from "typia";

import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { CommentTagRangeBigInt } from "../../structures/CommentTagRangeBigInt";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsFunctionAsyncCustom_CommentTagRangeBigInt = (): Promise<void> => _test_functional_assertEqualsFunctionAsync(CustomGuardError)(
  "CommentTagRangeBigInt"
)(CommentTagRangeBigInt)(
  (p: (input: CommentTagRangeBigInt) => Promise<CommentTagRangeBigInt>) =>
    typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
)