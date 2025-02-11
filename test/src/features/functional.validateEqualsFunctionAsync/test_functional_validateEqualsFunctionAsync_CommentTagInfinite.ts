import typia from "typia";

import { _test_functional_validateEqualsFunctionAsync } from "../../internal/_test_functional_validateEqualsFunctionAsync";
import { CommentTagInfinite } from "../../structures/CommentTagInfinite";

export const test_functional_validateEqualsFunctionAsync_CommentTagInfinite = _test_functional_validateEqualsFunctionAsync(
  "CommentTagInfinite"
)(CommentTagInfinite)(
  (p: (input: CommentTagInfinite) => Promise<CommentTagInfinite>) =>
    typia.functional.validateEqualsFunction(p),
)