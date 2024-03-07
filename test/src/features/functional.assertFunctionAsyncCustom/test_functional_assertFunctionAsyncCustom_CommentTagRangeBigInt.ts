import typia from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { CommentTagRangeBigInt } from "../../structures/CommentTagRangeBigInt";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertFunctionAsyncCustom_CommentTagRangeBigInt =
  _test_functional_assertFunctionAsync(CustomGuardError)(
    "CommentTagRangeBigInt",
  )(CommentTagRangeBigInt)(
    (p: (input: CommentTagRangeBigInt) => Promise<CommentTagRangeBigInt>) =>
      typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
  );
