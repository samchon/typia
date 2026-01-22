import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { CommentTagRangeBigInt } from "../../structures/CommentTagRangeBigInt";

export const test_functional_assertFunctionAsync_CommentTagRangeBigInt =
  (): Promise<void> =>
    _test_functional_assertFunctionAsync(TypeGuardError)(
      "CommentTagRangeBigInt",
    )(CommentTagRangeBigInt)(
      (p: (input: CommentTagRangeBigInt) => Promise<CommentTagRangeBigInt>) =>
        typia.functional.assertFunction(p),
    );
