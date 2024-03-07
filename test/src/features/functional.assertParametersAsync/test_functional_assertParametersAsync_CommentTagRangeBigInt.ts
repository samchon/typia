import typia from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { CommentTagRangeBigInt } from "../../structures/CommentTagRangeBigInt";

import { TypeGuardError } from "typia";

export const test_functional_assertParametersAsync_CommentTagRangeBigInt =
  _test_functional_assertParametersAsync(TypeGuardError)(
    "CommentTagRangeBigInt",
  )(CommentTagRangeBigInt)(
    (p: (input: CommentTagRangeBigInt) => Promise<CommentTagRangeBigInt>) =>
      typia.functional.assertParameters(p),
  );
