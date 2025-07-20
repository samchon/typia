import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { CommentTagBigInt } from "../../structures/CommentTagBigInt";

export const test_functional_assertEqualsParametersAsync_CommentTagBigInt =
  (): Promise<void> =>
    _test_functional_assertEqualsParametersAsync(TypeGuardError)(
      "CommentTagBigInt",
    )(CommentTagBigInt)(
      (p: (input: CommentTagBigInt) => Promise<CommentTagBigInt>) =>
        typia.functional.assertEqualsParameters(p),
    );
