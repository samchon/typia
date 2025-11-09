import typia from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { CommentTagTypeBigInt } from "../../structures/CommentTagTypeBigInt";

import { TypeGuardError } from "typia";

export const test_functional_assertParametersAsync_CommentTagTypeBigInt = (): Promise<void> => _test_functional_assertParametersAsync(TypeGuardError)(
  "CommentTagTypeBigInt"
)(CommentTagTypeBigInt)(
  (p: (input: CommentTagTypeBigInt) => Promise<CommentTagTypeBigInt>) =>
    typia.functional.assertParameters(p),
)