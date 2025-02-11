import typia from "typia";

import { _test_functional_equalsReturnAsync } from "../../internal/_test_functional_equalsReturnAsync";
import { CommentTagDefault } from "../../structures/CommentTagDefault";

export const test_functional_equalsReturnAsync_CommentTagDefault = _test_functional_equalsReturnAsync(
  "CommentTagDefault"
)(CommentTagDefault)(
  (p: (input: CommentTagDefault) => Promise<CommentTagDefault>) =>
    typia.functional.equalsReturn(p),
)