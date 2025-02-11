import typia from "typia";

import { _test_functional_isReturnAsync } from "../../internal/_test_functional_isReturnAsync";
import { CommentTagArray } from "../../structures/CommentTagArray";

export const test_functional_isReturnAsync_CommentTagArray = _test_functional_isReturnAsync(
  "CommentTagArray"
)(CommentTagArray)(
  (p: (input: CommentTagArray) => Promise<CommentTagArray>) =>
    typia.functional.isReturn(p),
)