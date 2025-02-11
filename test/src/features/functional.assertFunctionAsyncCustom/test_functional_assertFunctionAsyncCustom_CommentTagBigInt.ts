import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { CommentTagBigInt } from "../../structures/CommentTagBigInt";

export const test_functional_assertFunctionAsyncCustom_CommentTagBigInt =
  _test_functional_assertFunctionAsync(CustomGuardError)("CommentTagBigInt")(
    CommentTagBigInt,
  )((p: (input: CommentTagBigInt) => Promise<CommentTagBigInt>) =>
    typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
  );
