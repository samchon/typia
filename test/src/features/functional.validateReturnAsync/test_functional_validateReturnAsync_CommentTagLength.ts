import typia from "typia";

import { _test_functional_validateReturnAsync } from "../../internal/_test_functional_validateReturnAsync";
import { CommentTagLength } from "../../structures/CommentTagLength";

export const test_functional_validateReturnAsync_CommentTagLength = (): Promise<void> => _test_functional_validateReturnAsync(
  "CommentTagLength"
)(CommentTagLength)(
  (p: (input: CommentTagLength) => Promise<CommentTagLength>) =>
    typia.functional.validateReturn(p),
)