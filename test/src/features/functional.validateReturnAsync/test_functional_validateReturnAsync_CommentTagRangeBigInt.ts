import typia from "typia";

import { _test_functional_validateReturnAsync } from "../../internal/_test_functional_validateReturnAsync";
import { CommentTagRangeBigInt } from "../../structures/CommentTagRangeBigInt";

export const test_functional_validateReturnAsync_CommentTagRangeBigInt =
  _test_functional_validateReturnAsync("CommentTagRangeBigInt")(
    CommentTagRangeBigInt,
  )((p: (input: CommentTagRangeBigInt) => Promise<CommentTagRangeBigInt>) =>
    typia.functional.validateReturn(p),
  );
