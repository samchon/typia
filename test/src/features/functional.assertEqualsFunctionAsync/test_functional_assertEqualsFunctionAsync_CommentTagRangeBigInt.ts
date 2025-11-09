import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { CommentTagRangeBigInt } from "../../structures/CommentTagRangeBigInt";

export const test_functional_assertEqualsFunctionAsync_CommentTagRangeBigInt =
  (): Promise<void> =>
    _test_functional_assertEqualsFunctionAsync(TypeGuardError)(
      "CommentTagRangeBigInt",
    )(CommentTagRangeBigInt)(
      (p: (input: CommentTagRangeBigInt) => Promise<CommentTagRangeBigInt>) =>
        typia.functional.assertEqualsFunction(p),
    );
