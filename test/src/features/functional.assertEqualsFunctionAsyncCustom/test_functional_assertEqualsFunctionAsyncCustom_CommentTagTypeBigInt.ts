import typia from "typia";

import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { CommentTagTypeBigInt } from "../../structures/CommentTagTypeBigInt";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsFunctionAsyncCustom_CommentTagTypeBigInt =
  _test_functional_assertEqualsFunctionAsync(CustomGuardError)(
    "CommentTagTypeBigInt",
  )(CommentTagTypeBigInt)(
    (p: (input: CommentTagTypeBigInt) => Promise<CommentTagTypeBigInt>) =>
      typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
  );
