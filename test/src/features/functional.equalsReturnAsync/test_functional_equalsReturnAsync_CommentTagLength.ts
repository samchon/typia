import typia from "typia";

import { _test_functional_equalsReturnAsync } from "../../internal/_test_functional_equalsReturnAsync";
import { CommentTagLength } from "../../structures/CommentTagLength";

export const test_functional_equalsReturnAsync_CommentTagLength = _test_functional_equalsReturnAsync(
  "CommentTagLength"
)(CommentTagLength)(
  (p: (input: CommentTagLength) => Promise<CommentTagLength>) =>
    typia.functional.equalsReturn(p),
)