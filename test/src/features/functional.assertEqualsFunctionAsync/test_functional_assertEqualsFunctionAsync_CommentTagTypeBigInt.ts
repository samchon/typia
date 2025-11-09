import typia from "typia";

import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { CommentTagTypeBigInt } from "../../structures/CommentTagTypeBigInt";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsFunctionAsync_CommentTagTypeBigInt = (): Promise<void> => _test_functional_assertEqualsFunctionAsync(TypeGuardError)(
  "CommentTagTypeBigInt"
)(CommentTagTypeBigInt)(
  (p: (input: CommentTagTypeBigInt) => Promise<CommentTagTypeBigInt>) =>
    typia.functional.assertEqualsFunction(p),
)