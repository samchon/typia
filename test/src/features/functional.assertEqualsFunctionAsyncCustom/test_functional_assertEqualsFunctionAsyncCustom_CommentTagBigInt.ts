import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { CommentTagBigInt } from "../../structures/CommentTagBigInt";

export const test_functional_assertEqualsFunctionAsyncCustom_CommentTagBigInt =
  _test_functional_assertEqualsFunctionAsync(CustomGuardError)(
    "CommentTagBigInt",
  )(CommentTagBigInt)(
    (p: (input: CommentTagBigInt) => Promise<CommentTagBigInt>) =>
      typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
  );
