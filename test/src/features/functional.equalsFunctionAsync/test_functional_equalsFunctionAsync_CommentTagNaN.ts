import typia from "typia";

import { _test_functional_equalsFunctionAsync } from "../../internal/_test_functional_equalsFunctionAsync";
import { CommentTagNaN } from "../../structures/CommentTagNaN";

export const test_functional_equalsFunctionAsync_CommentTagNaN = (): Promise<void> => _test_functional_equalsFunctionAsync(
  "CommentTagNaN"
)(CommentTagNaN)(
  (p: (input: CommentTagNaN) => Promise<CommentTagNaN>) =>
    typia.functional.equalsFunction(p),
)