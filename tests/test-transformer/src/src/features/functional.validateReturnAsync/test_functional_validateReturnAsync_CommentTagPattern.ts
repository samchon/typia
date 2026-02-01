import typia from "typia";

import { _test_functional_validateReturnAsync } from "../../internal/_test_functional_validateReturnAsync";
import { CommentTagPattern } from "../../structures/CommentTagPattern";

export const test_functional_validateReturnAsync_CommentTagPattern = (): Promise<void> => _test_functional_validateReturnAsync(
  "CommentTagPattern"
)(CommentTagPattern)(
  (p: (input: CommentTagPattern) => Promise<CommentTagPattern>) =>
    typia.functional.validateReturn(p),
)