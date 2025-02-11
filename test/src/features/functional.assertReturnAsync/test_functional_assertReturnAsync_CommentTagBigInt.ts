import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { CommentTagBigInt } from "../../structures/CommentTagBigInt";

export const test_functional_assertReturnAsync_CommentTagBigInt =
  _test_functional_assertReturnAsync(TypeGuardError)("CommentTagBigInt")(
    CommentTagBigInt,
  )((p: (input: CommentTagBigInt) => Promise<CommentTagBigInt>) =>
    typia.functional.assertReturn(p),
  );
