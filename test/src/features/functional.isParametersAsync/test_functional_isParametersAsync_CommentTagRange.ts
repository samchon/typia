import typia from "typia";

import { _test_functional_isParametersAsync } from "../../internal/_test_functional_isParametersAsync";
import { CommentTagRange } from "../../structures/CommentTagRange";

export const test_functional_isParametersAsync_CommentTagRange = _test_functional_isParametersAsync(
  "CommentTagRange"
)(CommentTagRange)(
  (p: (input: CommentTagRange) => Promise<CommentTagRange>) =>
    typia.functional.isParameters(p),
)