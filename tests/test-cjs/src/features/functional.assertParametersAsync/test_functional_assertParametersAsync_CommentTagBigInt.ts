import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { CommentTagBigInt } from "../../structures/CommentTagBigInt";

export const test_functional_assertParametersAsync_CommentTagBigInt =
  (): Promise<void> =>
    _test_functional_assertParametersAsync(TypeGuardError)("CommentTagBigInt")(
      CommentTagBigInt,
    )((p: (input: CommentTagBigInt) => Promise<CommentTagBigInt>) =>
      typia.functional.assertParameters(p),
    );
