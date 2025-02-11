import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { CommentTagRangeBigInt } from "../../structures/CommentTagRangeBigInt";

export const test_functional_assertEqualsReturnAsync_CommentTagRangeBigInt =
  _test_functional_assertEqualsReturnAsync(TypeGuardError)(
    "CommentTagRangeBigInt",
  )(CommentTagRangeBigInt)(
    (p: (input: CommentTagRangeBigInt) => Promise<CommentTagRangeBigInt>) =>
      typia.functional.assertEqualsReturn(p),
  );
