import typia from "typia";

import { _test_functional_validateEqualsReturnAsync } from "../../internal/_test_functional_validateEqualsReturnAsync";
import { CommentTagArray } from "../../structures/CommentTagArray";

export const test_functional_validateEqualsReturnAsync_CommentTagArray = (): Promise<void> => _test_functional_validateEqualsReturnAsync(
  "CommentTagArray"
)(CommentTagArray)(
  (p: (input: CommentTagArray) => Promise<CommentTagArray>) =>
    typia.functional.validateEqualsReturn(p),
)