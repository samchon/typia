import typia from "typia";

import { _test_functional_equalsReturnAsync } from "../../internal/_test_functional_equalsReturnAsync";
import { CommentTagPattern } from "../../structures/CommentTagPattern";

export const test_functional_equalsReturnAsync_CommentTagPattern = (): Promise<void> => _test_functional_equalsReturnAsync(
  "CommentTagPattern"
)(CommentTagPattern)(
  (p: (input: CommentTagPattern) => Promise<CommentTagPattern>) =>
    typia.functional.equalsReturn(p),
)