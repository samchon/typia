import typia from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { CommentTagRangeBigInt } from "../../structures/CommentTagRangeBigInt";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertReturnAsyncCustom_CommentTagRangeBigInt = (): Promise<void> => _test_functional_assertReturnAsync(CustomGuardError)(
  "CommentTagRangeBigInt"
)(CommentTagRangeBigInt)(
  (p: (input: CommentTagRangeBigInt) => Promise<CommentTagRangeBigInt>) =>
    typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
)