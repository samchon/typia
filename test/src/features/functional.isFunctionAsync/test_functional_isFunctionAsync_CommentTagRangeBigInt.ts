import typia from "typia";

import { _test_functional_isFunctionAsync } from "../../internal/_test_functional_isFunctionAsync";
import { CommentTagRangeBigInt } from "../../structures/CommentTagRangeBigInt";

export const test_functional_isFunctionAsync_CommentTagRangeBigInt =
  (): Promise<void> =>
    _test_functional_isFunctionAsync("CommentTagRangeBigInt")(
      CommentTagRangeBigInt,
    )((p: (input: CommentTagRangeBigInt) => Promise<CommentTagRangeBigInt>) =>
      typia.functional.isFunction(p),
    );
