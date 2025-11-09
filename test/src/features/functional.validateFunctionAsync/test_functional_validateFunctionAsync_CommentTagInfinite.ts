import typia from "typia";

import { _test_functional_validateFunctionAsync } from "../../internal/_test_functional_validateFunctionAsync";
import { CommentTagInfinite } from "../../structures/CommentTagInfinite";

export const test_functional_validateFunctionAsync_CommentTagInfinite = (): Promise<void> => _test_functional_validateFunctionAsync(
  "CommentTagInfinite"
)(CommentTagInfinite)(
  (p: (input: CommentTagInfinite) => Promise<CommentTagInfinite>) =>
    typia.functional.validateFunction(p),
)