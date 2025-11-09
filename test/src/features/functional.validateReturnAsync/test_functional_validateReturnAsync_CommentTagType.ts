import typia from "typia";

import { _test_functional_validateReturnAsync } from "../../internal/_test_functional_validateReturnAsync";
import { CommentTagType } from "../../structures/CommentTagType";

export const test_functional_validateReturnAsync_CommentTagType = (): Promise<void> => _test_functional_validateReturnAsync(
  "CommentTagType"
)(CommentTagType)(
  (p: (input: CommentTagType) => Promise<CommentTagType>) =>
    typia.functional.validateReturn(p),
)