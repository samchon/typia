import typia from "typia";

import { _test_functional_validateEqualsParametersAsync } from "../../internal/_test_functional_validateEqualsParametersAsync";
import { CommentTagInfinite } from "../../structures/CommentTagInfinite";

export const test_functional_validateEqualsParametersAsync_CommentTagInfinite = (): Promise<void> => _test_functional_validateEqualsParametersAsync(
  "CommentTagInfinite"
)(CommentTagInfinite)(
  (p: (input: CommentTagInfinite) => Promise<CommentTagInfinite>) =>
    typia.functional.validateEqualsParameters(p),
)