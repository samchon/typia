import typia from "typia";

import { _test_functional_equalsReturnAsync } from "../../internal/_test_functional_equalsReturnAsync";
import { CommentTagRangeBigInt } from "../../structures/CommentTagRangeBigInt";

export const test_functional_equalsReturnAsync_CommentTagRangeBigInt =
  (): Promise<void> =>
    _test_functional_equalsReturnAsync("CommentTagRangeBigInt")(
      CommentTagRangeBigInt,
    )((p: (input: CommentTagRangeBigInt) => Promise<CommentTagRangeBigInt>) =>
      typia.functional.equalsReturn(p),
    );
