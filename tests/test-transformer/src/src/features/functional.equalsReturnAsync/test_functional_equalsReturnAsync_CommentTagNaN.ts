import typia from "typia";

import { _test_functional_equalsReturnAsync } from "../../internal/_test_functional_equalsReturnAsync";
import { CommentTagNaN } from "../../structures/CommentTagNaN";

export const test_functional_equalsReturnAsync_CommentTagNaN = (): Promise<void> => _test_functional_equalsReturnAsync(
  "CommentTagNaN"
)(CommentTagNaN)(
  (p: (input: CommentTagNaN) => Promise<CommentTagNaN>) =>
    typia.functional.equalsReturn(p),
)