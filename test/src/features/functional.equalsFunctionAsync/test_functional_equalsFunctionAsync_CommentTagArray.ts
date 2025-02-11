import typia from "typia";

import { _test_functional_equalsFunctionAsync } from "../../internal/_test_functional_equalsFunctionAsync";
import { CommentTagArray } from "../../structures/CommentTagArray";

export const test_functional_equalsFunctionAsync_CommentTagArray = _test_functional_equalsFunctionAsync(
  "CommentTagArray"
)(CommentTagArray)(
  (p: (input: CommentTagArray) => Promise<CommentTagArray>) =>
    typia.functional.equalsFunction(p),
)