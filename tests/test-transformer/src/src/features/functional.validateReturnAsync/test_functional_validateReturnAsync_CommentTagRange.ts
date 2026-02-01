import typia from "typia";

import { _test_functional_validateReturnAsync } from "../../internal/_test_functional_validateReturnAsync";
import { CommentTagRange } from "../../structures/CommentTagRange";

export const test_functional_validateReturnAsync_CommentTagRange = (): Promise<void> => _test_functional_validateReturnAsync(
  "CommentTagRange"
)(CommentTagRange)(
  (p: (input: CommentTagRange) => Promise<CommentTagRange>) =>
    typia.functional.validateReturn(p),
)