import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { CommentTagBigInt } from "../../structures/CommentTagBigInt";

export const test_functional_assertEqualsFunctionAsync_CommentTagBigInt =
  (): Promise<void> =>
    _test_functional_assertEqualsFunctionAsync(TypeGuardError)(
      "CommentTagBigInt",
    )(CommentTagBigInt)(
      (p: (input: CommentTagBigInt) => Promise<CommentTagBigInt>) =>
        typia.functional.assertEqualsFunction(p),
    );
