import typia from "typia";

import { _test_functional_validateEqualsReturnAsync } from "../../internal/_test_functional_validateEqualsReturnAsync";
import { CommentTagNaN } from "../../structures/CommentTagNaN";

export const test_functional_validateEqualsReturnAsync_CommentTagNaN = (): Promise<void> => _test_functional_validateEqualsReturnAsync(
  "CommentTagNaN"
)(CommentTagNaN)(
  (p: (input: CommentTagNaN) => Promise<CommentTagNaN>) =>
    typia.functional.validateEqualsReturn(p),
)