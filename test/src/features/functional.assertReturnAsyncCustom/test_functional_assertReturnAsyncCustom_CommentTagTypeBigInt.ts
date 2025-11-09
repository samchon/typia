import typia from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { CommentTagTypeBigInt } from "../../structures/CommentTagTypeBigInt";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertReturnAsyncCustom_CommentTagTypeBigInt = (): Promise<void> => _test_functional_assertReturnAsync(CustomGuardError)(
  "CommentTagTypeBigInt"
)(CommentTagTypeBigInt)(
  (p: (input: CommentTagTypeBigInt) => Promise<CommentTagTypeBigInt>) =>
    typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
)