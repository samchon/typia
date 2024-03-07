import typia from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { CommentTagBigInt } from "../../structures/CommentTagBigInt";

import { TypeGuardError } from "typia";

export const test_functional_assertParametersAsync_CommentTagBigInt =
  _test_functional_assertParametersAsync(TypeGuardError)("CommentTagBigInt")(
    CommentTagBigInt,
  )((p: (input: CommentTagBigInt) => Promise<CommentTagBigInt>) =>
    typia.functional.assertParameters(p),
  );
