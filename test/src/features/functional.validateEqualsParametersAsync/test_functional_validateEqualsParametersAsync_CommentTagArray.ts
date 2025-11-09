import typia from "typia";

import { _test_functional_validateEqualsParametersAsync } from "../../internal/_test_functional_validateEqualsParametersAsync";
import { CommentTagArray } from "../../structures/CommentTagArray";

export const test_functional_validateEqualsParametersAsync_CommentTagArray = (): Promise<void> => _test_functional_validateEqualsParametersAsync(
  "CommentTagArray"
)(CommentTagArray)(
  (p: (input: CommentTagArray) => Promise<CommentTagArray>) =>
    typia.functional.validateEqualsParameters(p),
)