import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { CommentTagBigInt } from "../../structures/CommentTagBigInt";

export const test_functional_assertEqualsReturnAsync_CommentTagBigInt =
  (): Promise<void> =>
    _test_functional_assertEqualsReturnAsync(TypeGuardError)(
      "CommentTagBigInt",
    )(CommentTagBigInt)(
      (p: (input: CommentTagBigInt) => Promise<CommentTagBigInt>) =>
        typia.functional.assertEqualsReturn(p),
    );
