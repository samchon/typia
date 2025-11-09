import typia from "typia";

import { _test_functional_isParametersAsync } from "../../internal/_test_functional_isParametersAsync";
import { CommentTagArray } from "../../structures/CommentTagArray";

export const test_functional_isParametersAsync_CommentTagArray = (): Promise<void> => _test_functional_isParametersAsync(
  "CommentTagArray"
)(CommentTagArray)(
  (p: (input: CommentTagArray) => Promise<CommentTagArray>) =>
    typia.functional.isParameters(p),
)