import typia from "typia";

import { _test_functional_isReturnAsync } from "../../internal/_test_functional_isReturnAsync";
import { CommentTagRangeBigInt } from "../../structures/CommentTagRangeBigInt";

export const test_functional_isReturnAsync_CommentTagRangeBigInt =
  _test_functional_isReturnAsync("CommentTagRangeBigInt")(
    CommentTagRangeBigInt,
  )((p: (input: CommentTagRangeBigInt) => Promise<CommentTagRangeBigInt>) =>
    typia.functional.isReturn(p),
  );
