import typia from "typia";

import { _test_functional_isFunctionAsync } from "../../internal/_test_functional_isFunctionAsync";
import { CommentTagNaN } from "../../structures/CommentTagNaN";

export const test_functional_isFunctionAsync_CommentTagNaN = _test_functional_isFunctionAsync(
  "CommentTagNaN"
)(CommentTagNaN)(
  (p: (input: CommentTagNaN) => Promise<CommentTagNaN>) =>
    typia.functional.isFunction(p),
)