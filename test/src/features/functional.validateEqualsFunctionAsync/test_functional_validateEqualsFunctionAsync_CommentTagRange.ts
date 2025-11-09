import typia from "typia";

import { _test_functional_validateEqualsFunctionAsync } from "../../internal/_test_functional_validateEqualsFunctionAsync";
import { CommentTagRange } from "../../structures/CommentTagRange";

export const test_functional_validateEqualsFunctionAsync_CommentTagRange = (): Promise<void> => _test_functional_validateEqualsFunctionAsync(
  "CommentTagRange"
)(CommentTagRange)(
  (p: (input: CommentTagRange) => Promise<CommentTagRange>) =>
    typia.functional.validateEqualsFunction(p),
)