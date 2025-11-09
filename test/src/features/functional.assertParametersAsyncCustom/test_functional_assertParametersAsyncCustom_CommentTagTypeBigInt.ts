import typia from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { CommentTagTypeBigInt } from "../../structures/CommentTagTypeBigInt";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertParametersAsyncCustom_CommentTagTypeBigInt = (): Promise<void> => _test_functional_assertParametersAsync(CustomGuardError)(
  "CommentTagTypeBigInt"
)(CommentTagTypeBigInt)(
  (p: (input: CommentTagTypeBigInt) => Promise<CommentTagTypeBigInt>) =>
    typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
)