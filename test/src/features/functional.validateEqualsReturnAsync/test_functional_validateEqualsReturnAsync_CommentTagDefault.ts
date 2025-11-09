import typia from "typia";

import { _test_functional_validateEqualsReturnAsync } from "../../internal/_test_functional_validateEqualsReturnAsync";
import { CommentTagDefault } from "../../structures/CommentTagDefault";

export const test_functional_validateEqualsReturnAsync_CommentTagDefault = (): Promise<void> => _test_functional_validateEqualsReturnAsync(
  "CommentTagDefault"
)(CommentTagDefault)(
  (p: (input: CommentTagDefault) => Promise<CommentTagDefault>) =>
    typia.functional.validateEqualsReturn(p),
)