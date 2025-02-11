import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { CommentTagTypeBigInt } from "../../structures/CommentTagTypeBigInt";

export const test_functional_assertFunctionAsync_CommentTagTypeBigInt =
  _test_functional_assertFunctionAsync(TypeGuardError)("CommentTagTypeBigInt")(
    CommentTagTypeBigInt,
  )((p: (input: CommentTagTypeBigInt) => Promise<CommentTagTypeBigInt>) =>
    typia.functional.assertFunction(p),
  );
