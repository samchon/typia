import typia from "typia";

import { _test_functional_validateEqualsFunctionAsync } from "../../internal/_test_functional_validateEqualsFunctionAsync";
import { CommentTagArray } from "../../structures/CommentTagArray";

export const test_functional_validateEqualsFunctionAsync_CommentTagArray = _test_functional_validateEqualsFunctionAsync(
  "CommentTagArray"
)(CommentTagArray)(
  (p: (input: CommentTagArray) => Promise<CommentTagArray>) =>
    typia.functional.validateEqualsFunction(p),
)