import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { CommentTagRangeBigInt } from "../../structures/CommentTagRangeBigInt";

export const test_functional_assertParametersAsync_CommentTagRangeBigInt =
  (): Promise<void> =>
    _test_functional_assertParametersAsync(TypeGuardError)(
      "CommentTagRangeBigInt",
    )(CommentTagRangeBigInt)(
      (p: (input: CommentTagRangeBigInt) => Promise<CommentTagRangeBigInt>) =>
        typia.functional.assertParameters(p),
    );
