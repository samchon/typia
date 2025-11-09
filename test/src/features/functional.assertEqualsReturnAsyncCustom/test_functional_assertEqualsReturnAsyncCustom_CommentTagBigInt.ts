import typia from "typia";

import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { CommentTagBigInt } from "../../structures/CommentTagBigInt";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsReturnAsyncCustom_CommentTagBigInt = (): Promise<void> => _test_functional_assertEqualsReturnAsync(CustomGuardError)(
  "CommentTagBigInt"
)(CommentTagBigInt)(
  (p: (input: CommentTagBigInt) => Promise<CommentTagBigInt>) =>
    typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
)